import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ClubI } from 'src/app/models/club';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClubesService {
  private clubesCollection: AngularFirestoreCollection<ClubI>;
  private clubes: Observable<ClubI[]>;

  constructor(private afs: AngularFirestore) {
    /* this.booksCollection = afs.collection<BookInterface>('books');
    this.books = this.booksCollection.valueChanges(); */
  }

  getClubes$() {
    this.clubesCollection = this.afs.collection<ClubI>('clubes');
    return this.clubes = this.clubesCollection.snapshotChanges()
    .pipe( map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as ClubI;
        data.id = action.payload.doc.id;
        return data;
      })
    }));
  }

  addRecord$(club: ClubI) {
    return from(this.clubesCollection.add(club));
  }

  updateRecord$(club: ClubI) {
    return from(this.afs.doc<ClubI>(`clubes/${club.id}`).update(club));
  }

  deleteRecord$(id: string) {
    return from(this.afs.doc<ClubI>(`clubes/${id}`).delete());
  }
}
