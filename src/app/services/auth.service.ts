import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { UserI } from "src/app/models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public user: UserI = {};

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
        userData => {
          resolve(userData);
        },
        err => reject(err)
      );
    });
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
}
