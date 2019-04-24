import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserI } from 'src/app/models/user';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
  }

  login(email: string, password: string) {
    return new Promise ( (resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(
          userData => {
            resolve(userData)
          },
          err => reject(err)
        );
    });
  }

  logoutUser(){
    return this.afAuth.auth.signOut();
  }
  
  isAuth() {
    return this.afAuth.authState.pipe( map(auth => auth) );
  }

  getProfile(id: string): Observable<UserI> {
    return this.afs.doc(`users/${id}`).valueChanges();
    
  }

  updateUser(user) {
    this.isAuth().subscribe(auth => {
      const userState = auth;

      userState.updateProfile({
          displayName: user.name,
          photoURL: user.photoUrl
        }).then(() => {
          this.afs.doc(`users/${user.uid}`).set(user).then(
            () => console.log('usuario actualizado'));
        }).catch(err => console.log(err));
    })

  }
}
