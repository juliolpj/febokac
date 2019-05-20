import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
import { UserI } from "src/app/models/user";
import { Observable, from } from "rxjs";
import { map, tap, finalize, mergeMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  private collection: AngularFirestoreCollection<UserI>;

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.collection = this.afs.collection<UserI>("users");
  }

  getRecords$(): Observable<UserI[]> {
    return this.collection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as UserI;
          data.uid = action.payload.doc.id;
          return data;
        });
      })
    );
  }

  getRecord$(id: string): Observable<UserI> {
    return this.afs.doc<UserI>(`users/${id}`).valueChanges();
  }

  getUsuarioByEmail(email: string) {
    return this.afs.collection<UserI>("users", ref => ref.where('email', '==', email)).valueChanges()
      .pipe( mergeMap( data => data));
  }

  addRecord$(registro: UserI) {
    return from(this.collection.add(registro));
  }

  updateRecord$(id: string, registro: UserI) {
    return from(this.afs.doc<UserI>(`users/${id}`).update(registro));
  }

  deleteRecord$(id: string) {
    return from(this.afs.doc<UserI>(`users/${id}`).delete());
  }
}
