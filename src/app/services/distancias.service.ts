import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { DistanciaI } from "src/app/models/distancia";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
import { CompetenciaI } from 'src/app/models/competencia';

@Injectable({
  providedIn: "root"
})
export class DistanciasService {
  private collection: AngularFirestoreCollection<DistanciaI>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection<DistanciaI>("distancias", 
      ref => ref.orderBy('embarcacion').orderBy('metros'));
  }

  getRecords$(): Observable<DistanciaI[]> {
    return this.collection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as DistanciaI;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
  }

  getAllEnCompetencia$(competencia: string) {
    return this.afs.doc<CompetenciaI>(`competencias/${competencia}`).valueChanges().pipe(
      map( data => data && data.distancia ? data.distancia : [])
    );
  }

  getOneEnCompetencia$(competencia: string, id: string) {
    return this.afs.doc<CompetenciaI>(`competencias/${competencia}`).valueChanges().pipe(
      map( data => data.distancia[id])
    );
  }

  getCompetencia$(competencia: string) {
    return this.afs.doc<CompetenciaI>(`competencias/${competencia}`).valueChanges();
  }

  getRecord$(id: string): Observable<DistanciaI> {
    return this.afs.doc<DistanciaI>(`distancias/${id}`).valueChanges();
  }

  addRecord$(registro: DistanciaI) {
    return from(this.collection.add(registro));
  }

  updateRecord$(id: string, registro: DistanciaI) {
    return from(this.afs.doc<DistanciaI>(`distancias/${id}`).update(registro));
  }

  deleteRecord$(id: string) {
    return from(this.afs.doc<DistanciaI>(`distancias/${id}`).delete());
  }
}
