import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { CompetenciaI } from "src/app/models/competencia";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CompetenciasService {
  private collection: AngularFirestoreCollection<CompetenciaI>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection<CompetenciaI>("competencias", ref => ref.orderBy('desde'));
  }

  getRecords$(): Observable<CompetenciaI[]> {
    return this.collection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as CompetenciaI;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
  }

  getRecord$(id: string): Observable<CompetenciaI> {
    return this.afs.doc<CompetenciaI>(`competencias/${id}`).valueChanges();
  }

  addRecord$(registro: CompetenciaI) {
    return from(this.collection.add(registro));
  }

  updateRecord$(id: string, registro: CompetenciaI) {
    return from(this.afs.doc<CompetenciaI>(`competencias/${id}`).update(registro));
  }

  deleteRecord$(id: string) {
    return from(this.afs.doc<CompetenciaI>(`competencias/${id}`).delete());
  }
}
