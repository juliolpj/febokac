import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { InscripcionI } from 'src/app/models/inscripcion';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  private collection: AngularFirestoreCollection<InscripcionI>;
  private inscripciones: Observable<InscripcionI[]>;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
    this.collection = afs.collection<InscripcionI>('inscripciones');
   
  }

  getRecords$(club: string = '') {
    if (club && club != 'FeBoCaK') {
      this.collection = this.afs.collection<InscripcionI>('inscripciones', ref => ref.where('club', '==', club));
    } else {
      this.collection = this.afs.collection<InscripcionI>('inscripciones');
    }
    return this.inscripciones = this.collection.snapshotChanges()
    .pipe( map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as InscripcionI;
        data.id = action.payload.doc.id;
        return data;
      })
    }));
  }

  getRecord$(id: string): Observable<InscripcionI> {
    return this.afs.doc<InscripcionI>(`inscripciones/${id}`).valueChanges();
  }

  addRecord$(inscripcion: InscripcionI) {
    return from(this.collection.add(inscripcion));
  }

  updateRecord$(id: string, inscripcion: InscripcionI) {
    return from(this.afs.doc<InscripcionI>(`inscripciones/${id}`).update(inscripcion));
  }

  deleteRecord$(id: string) {
    return from(this.afs.doc<InscripcionI>(`inscripciones/${id}`).delete());
  }
}
