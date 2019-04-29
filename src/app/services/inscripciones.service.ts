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
  private inscripcionesCollection: AngularFirestoreCollection<InscripcionI>;
  private inscripciones: Observable<InscripcionI[]>;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
    /* this.booksCollection = afs.collection<BookInterface>('books');
    this.books = this.booksCollection.valueChanges(); */
  }

  getInscripciones$() {
    this.inscripcionesCollection = this.afs.collection<InscripcionI>('inscripciones', ref => ref.where('club', '==', this.authService.user.club));
    return this.inscripciones = this.inscripcionesCollection.snapshotChanges()
    .pipe( map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as InscripcionI;
        data.id = action.payload.doc.id;
        return data;
      })
    }));
  }

  addRecord$(inscripcion: InscripcionI) {
    return from(this.inscripcionesCollection.add(inscripcion));
  }

  updateRecord$(inscripcion: InscripcionI) {
    return from(this.afs.doc<InscripcionI>(`inscripciones/${inscripcion.id}`).update(inscripcion));
  }

  deleteRecord$(id: string) {
    return from(this.afs.doc<InscripcionI>(`inscripciones/${id}`).delete());
  }
}
