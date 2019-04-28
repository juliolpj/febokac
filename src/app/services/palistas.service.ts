import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PalistaI } from 'src/app/models/palista';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class PalistasService {
  private palistasCollection: AngularFirestoreCollection<PalistaI>;
  private palistas: Observable<PalistaI[]>;

  constructor(private afs: AngularFirestore,
              private authService: AuthService) {
    /* this.booksCollection = afs.collection<BookInterface>('books');
    this.books = this.booksCollection.valueChanges(); */
  }

  getPalistas$() {
    this.palistasCollection = this.afs.collection<PalistaI>('palistas', ref => ref.where('club', '==', this.authService.user.club));
    return this.palistas = this.palistasCollection.snapshotChanges()
    .pipe( map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as PalistaI;
        data.id = action.payload.doc.id;
        return data;
      })
    }));
  }

  addRecord$(palista: PalistaI) {
    return from(this.palistasCollection.add(palista));
  }

  updateRecord$(palista: PalistaI) {
    return from(this.afs.doc<PalistaI>(`palistas/${palista.id}`).update(palista));
  }

  deleteRecord$(id: string) {
    return from(this.afs.doc<PalistaI>(`palistas/${id}`).delete());
  }
}
