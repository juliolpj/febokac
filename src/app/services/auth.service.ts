import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";

import { from, combineLatest, BehaviorSubject, Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

import { UserI } from "src/app/models/user";
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private subjectUsuario = new BehaviorSubject<UserI>( this.getUser() ); 

  constructor(public afAuth: AngularFireAuth, 
              private afs: AngularFirestore,
              private usuariosService: UsuariosService) {
  }

  getUser(): UserI {
    let usuario = {};
    let strUsuario = sessionStorage.getItem('currentUser');
    if (strUsuario !== null && strUsuario !== 'undefined') {
      usuario = JSON.parse(strUsuario);
    }
    
    return usuario;
  }

  getUser$(): Observable<UserI> {
    return this.subjectUsuario.asObservable();
  }
  sendUser(usuario: UserI) {
    this.subjectUsuario.next(usuario);
  }
  
  login$(email: string, password:string) {
    const fsSignIn$ = from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
      .pipe(
        map( data => data.user.email) );
    
    const usuario$ = this.usuariosService.getUsuarioByEmail$(email);
    
    const combinado$ = combineLatest(fsSignIn$, usuario$)
      .pipe( 
        map( data => data[1]), 
        tap( user => this.setAndSendUsuario(user))
           );
    return combinado$;
  
  }

  loginLocal$(email: string, password:string) {
    const usuarios = JSON.parse(localStorage.getItem('users'));
    const usuario = usuarios.find(elemento => elemento.email === email && elemento.password === password);
    this.setAndSendUsuario(usuario);
    return of(usuario);
  }

  logoutUser() {
    this.setAndSendUsuario({});
    return this.afAuth.auth.signOut();
  }

  setAndSendUsuario(usuario: UserI) {
    sessionStorage.setItem('currentUser', JSON.stringify(usuario));
    this.sendUser(usuario);
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
