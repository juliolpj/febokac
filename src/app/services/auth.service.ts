import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

import { Observable, from, combineLatest, of, Subject, BehaviorSubject } from "rxjs";
import { map, tap, flatMap } from "rxjs/operators";

import { UserI } from "src/app/models/user";
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private subjectUsuario = new BehaviorSubject<UserI>(JSON.parse(localStorage.getItem('currentUser'))); 

  constructor(public afAuth: AngularFireAuth, 
              private afs: AngularFirestore,
              private usuariosService: UsuariosService) {
  }

  getUser(): Observable<UserI> {
    return this.subjectUsuario.asObservable();
  }
  sendUser(usuario: UserI) {
    this.subjectUsuario.next(usuario);
  }

  login$(email: string, password:string) {
    const fsSignIn$ = from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
      .pipe( map( data => data.user.email) );
    
    const usuario$ = this.usuariosService.getUsuarioByEmail(email);
    
    const combinado$ = combineLatest(fsSignIn$, usuario$)
      .pipe( map( data => data[1]), tap(user => this.setUsuario(user)) );
    return combinado$;
  
  }

  logoutUser() {
    this.setUsuario({});
    return this.afAuth.auth.signOut();
  }

  isAuthViejo() {
    const email$ = this.afAuth.authState.pipe( map( data => data.email) );
    const usuarios$ = this.usuariosService.getRecords$();

    const combinado$ = combineLatest(email$, usuarios$).pipe(
      map( ([email, usuarios]: [string, UserI[]]) => 
        usuarios.find( usuario => usuario.email === email) ),
      tap(user => this.setUsuario(user))
    );
    return combinado$;
  }

  isAuth() {
    const usuario = JSON.parse(localStorage.getItem('currentUser'));
    this.sendUser(usuario);
    console.log(usuario);
    return of(usuario);
  }

  setUsuario(usuario: UserI) {
    localStorage.setItem('currentUser', JSON.stringify(usuario));
    this.sendUser(usuario);
  }

  fetchUser(user) {
    if (user) {

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
              //this.user = user;
            });
        })
        .catch(err => console.log(err));
    });
  }

}
