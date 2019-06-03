import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PalistaI } from 'src/app/models/palista';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserI } from '../models/user';
import { UtilService } from './util.service';


@Injectable({
  providedIn: 'root'
})
export class PalistasService {
  private collection: AngularFirestoreCollection<PalistaI>;
  private palistas: Observable<PalistaI[]>;
  private usuario: UserI;

  

  constructor(private afs: AngularFirestore,
              private authService: AuthService,
              private util: UtilService) {
    this.usuario = this.authService.getUser();
  }

  getRecords$(club: string = ''): Observable<PalistaI[]> {
    return this.usuario.rol === 'Competencias' ? this.getRecordsLS$() : this.getRecordsFB$(club);
  }
  getRecordsLS$(): Observable<PalistaI[]> {
    return of( JSON.parse(localStorage.getItem('palistas') ));
  }
  getRecordsFB$(club: string = '') {
    if (club) {
      this.collection = this.afs.collection<PalistaI>('palistas', ref => ref.where('club', '==', club));
    } else {
      this.collection = this.afs.collection<PalistaI>('palistas');
    }
    return this.palistas = this.collection.snapshotChanges()
    .pipe( map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as PalistaI;
        data.id = action.payload.doc.id;
        return data;
      })
    }));
  }

  getRecord$(id: string): Observable<PalistaI> {
    return this.afs.doc<PalistaI>(`palistas/${id}`).valueChanges();
  }

  addRecord$(registro: PalistaI){
    return this.usuario.rol === 'Competencias' ? this.addRecordLS$(registro) : this.addRecordFB$(registro);
  }
  addRecordLS$(registro: PalistaI) {
    const tabla = JSON.parse(localStorage.getItem('palistas'));
    registro.id = this.util.generarID();
    tabla.push(registro);
    localStorage.setItem('palistas', JSON.stringify(tabla));
    return from(tabla);
  }
  addRecordFB$(registro: PalistaI) {
    registro.palista = registro.nombre.trim() + ' ' + registro.apellido.trim();
    return from(this.collection.add(registro));
  }

  updateRecord$(id: string, registro: PalistaI): Observable<any> {
    return this.usuario.rol === 'Competencias' ? this.updateRecordLS$(id, registro) : this.updateRecordFB$(id, registro);
  }
  updateRecordLS$(id: string, registro: PalistaI): Observable<any> {
    registro.id = id;
    const tabla = JSON.parse(localStorage.getItem('palistas'));
    tabla.splice( tabla.findIndex(element => element.id === id), 1, registro );
    localStorage.setItem('palistas', JSON.stringify(tabla));
    return of(registro);
  }
  updateRecordFB$(id: string, registro: PalistaI): Observable<any> {
    registro.palista = registro.nombre.trim() + ' ' + registro.apellido.trim();
    return from(this.afs.doc<PalistaI>(`palistas/${id}`).update(registro));
  }

  deleteRecord$(id: string): Observable<any> {
    return this.usuario.rol === 'Competencias' ? this.deleteRecordLS$(id) : this.deleteRecordFB$(id);
  }
  deleteRecordLS$(id: string): Observable<any> {
    const tabla = JSON.parse(localStorage.getItem('palistas'));
    tabla.splice( tabla.findIndex(element => element.id === id), 1 );
    localStorage.setItem('palistas', JSON.stringify(tabla));
    return from(tabla);
  }
  deleteRecordFB$(id: string): Observable<any> {
    return from(this.afs.doc<PalistaI>(`palistas/${id}`).delete());
  }
}
