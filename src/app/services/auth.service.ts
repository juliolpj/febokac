import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

import { Observable, from, combineLatest } from "rxjs";
import { map, tap, mergeMap } from "rxjs/operators";

import { UserI } from "src/app/models/user";
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public user: UserI = {};

  constructor(public afAuth: AngularFireAuth, 
              private afs: AngularFirestore,
              private usuariosService: UsuariosService) {}

  loginViejo(email: string, password: string) {
    //this.signIn(email, password).subscribe();

    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
        userData => {
          resolve(userData);
          this.user.email = userData.user.email;
          
        },
        err => reject(err)
      );
    });
  }

  login$(email: string, password:string) {
    const fsSignIn$ = from(this.afAuth.auth.signInWithEmailAndPassword(email, password)).pipe(
      tap( data => console.log('auth.signInWithEmail: ', data.user.email)),
      map( data => data.user.email) );
    
    const usuario$ = this.usuariosService.getUsuarioByEmail(email).pipe(
      tap( data => console.log('tabla user: ', data)) );
    
    const combinado$ = combineLatest(fsSignIn$,usuario$).pipe(
      tap( data => console.log('combinado: ', data)),
      map( (data) => {
        console.log('data1', data[0]);
        console.log('data2', data[1]);
        return data[1];
      }),
      tap( data => console.log('solo data usuario:', data)),
      tap( data => this.user = data) );
    return combinado$;
  
  }

  logoutUser() {
    return this.afAuth.auth.signOut();
  }

  isAuth() {
    return this.afAuth.authState.pipe(
      tap(user => this.fetchUser(user))
    );
  }

  fetchUser(user) {
    if (user) {
      this.user.name = user.displayName;
      this.user.email = user.email;
      this.user.photoUrl = user.photoURL;
      this.user.uid = user.uid;
      this.getProfile(this.user.uid).subscribe(data => {
        this.user.club = data.club;
      });
    }
  }

  getProfile(id: string): Observable<UserI> {
    return this.afs.doc(`users/${id}`).valueChanges();
  }

  updateUser(user) {
    this.afAuth.authState.pipe(map(auth => auth)).subscribe(auth => {
      const userState = auth;
      userState
        .updateProfile({ displayName: user.name, photoURL: user.photoUrl })
        .then(() => {
          this.afs
            .doc(`users/${user.uid}`)
            .set(user)
            .then(() => {
              this.user = user;
            });
        })
        .catch(err => console.log(err));
    });
  }

  registerUser(email: string, pass: string) {
    return new Promise( (resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(
          userData => {
            resolve(userData),
            console.log(userData.user)
          }).catch( err => console.log(reject(err)))
    });
  }
}
