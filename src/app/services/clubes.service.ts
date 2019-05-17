import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ClubI } from 'src/app/models/club';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClubesService {
  private clubesCollection: AngularFirestoreCollection<ClubI>;
  private clubes: Observable<ClubI[]>;

  private clubDoc: AngularFirestoreDocument<ClubI>;
  private club: Observable<ClubI>;

  constructor(private afs: AngularFirestore) {
    /* this.booksCollection = afs.collection<BookInterface>('books');
    this.books = this.booksCollection.valueChanges(); */
  }

  getRecords$() {
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

  getRecord$(id: string) {
    this.clubDoc = this.afs.doc<ClubI>(`clubes/${id}`);
    this.club = this.clubDoc.valueChanges();
    return this.club;
  }

  addRecord$(registro: ClubI) {
    return from(this.clubesCollection.add(registro));
  }

  updateRecord$(id: string, registro: ClubI) {
    return from(this.afs.doc<ClubI>(`clubes/${id}`).update(registro));
  }

  deleteRecord$(id: string) {
    return from(this.afs.doc<ClubI>(`clubes/${id}`).delete());
  }
}
