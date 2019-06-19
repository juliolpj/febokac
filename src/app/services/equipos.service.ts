import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { EquipoI } from "src/app/models/equipo";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EquiposService {
  private collection: AngularFirestoreCollection<EquipoI>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection<EquipoI>("equipos");
  }

  getRecords$(): Observable<EquipoI[]> {
    return this.collection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as EquipoI;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
  }

  getRecord$(id: string): Observable<EquipoI> {
    return this.afs.doc<EquipoI>(`equipos/${id}`).valueChanges();
  }

  addRecord$(registro: EquipoI) {
    return from(this.collection.add(registro));
  }

  updateRecord$(id: string, registro: EquipoI) {
    return from(this.afs.doc<EquipoI>(`equipos/${id}`).update(registro));
  }

  deleteRecord$(id: string) {
    return from(this.afs.doc<EquipoI>(`equipos/${id}`).delete());
  }
}
