import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { CategoriaI } from "src/app/models/categoria";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CategoriasService {
  private collection: AngularFirestoreCollection<CategoriaI>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection<CategoriaI>("categorias");
  }

  getRecords$(): Observable<CategoriaI[]> {
    return this.collection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as CategoriaI;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
  }

  getRecord$(id: string): Observable<CategoriaI> {
    return this.afs.doc<CategoriaI>(`categorias/${id}`).valueChanges();
  }

  addRecord$(registro: CategoriaI) {
    return from(this.collection.add(registro));
  }

  updateRecord$(id: string, registro: CategoriaI) {
    return from(this.afs.doc<CategoriaI>(`categorias/${id}`).update(registro));
  }

  deleteRecord$(id: string) {
    return from(this.afs.doc<CategoriaI>(`categorias/${id}`).delete());
  }
}
