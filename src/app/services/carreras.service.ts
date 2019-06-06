import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CarreraI, DetalleCarreraI } from 'src/app/models/carrera';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserI } from '../models/user';
import { UtilService } from './util.service';


@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
  private collection: AngularFirestoreCollection<CarreraI>;
  private usuario: UserI;

  

  constructor(private afs: AngularFirestore,
              private authService: AuthService,
              public util: UtilService) {
    this.usuario = this.authService.getUser();
  }

  getRecords$(): Observable<CarreraI[]> {
    return this.usuario.rol === 'Competencias' ? this.getRecordsLS$() : this.getRecordsFB$();
  }
  getRecordsLS$(): Observable<CarreraI[]> {
    return of( JSON.parse(localStorage.getItem('carreras') ));
  }
  getRecordsFB$() {
    this.collection = this.afs.collection<CarreraI>('carreras');
    return this.collection.snapshotChanges()
    .pipe( map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as CarreraI;
        data.id = action.payload.doc.id;
        return data;
      })
    }));
  }

  getRecord$(id: string): Observable<CarreraI> {
    return this.afs.doc<CarreraI>(`palistas/${id}`).valueChanges();
  }

  addRecord$(registro: CarreraI){
    return this.usuario.rol === 'Competencias' ? this.addRecordLS$(registro) : this.addRecordFB$(registro);
  }
  addRecordLS$(registro: CarreraI) {
    const tabla = JSON.parse(localStorage.getItem('carreras'));
    registro.id = this.util.generarID();
    tabla.push(registro);
    localStorage.setItem('carreras', JSON.stringify(tabla));
    return from(tabla);
  }
  addRecordFB$(registro: CarreraI) {
    return from(this.collection.add(registro));
  }

  updateRecord$(id: string, registro: CarreraI): Observable<any> {
    return this.usuario.rol === 'Competencias' ? this.updateRecordLS$(id, registro) : this.updateRecordFB$(id, registro);
  }
  updateRecordLS$(id: string, registro: CarreraI): Observable<any> {
    registro.id = id;
    const tabla = JSON.parse(localStorage.getItem('carreras'));
    tabla.splice( tabla.findIndex(element => element.id === id), 1, registro );
    localStorage.setItem('carreras', JSON.stringify(tabla));
    return of(registro);
  }
  updateRecordFB$(id: string, registro: CarreraI): Observable<any> {
    return from(this.afs.doc<CarreraI>(`palistas/${id}`).update(registro));
  }

  deleteRecord$(id: string): Observable<any> {
    return this.usuario.rol === 'Competencias' ? this.deleteRecordLS$(id) : this.deleteRecordFB$(id);
  }
  deleteRecordLS$(id: string): Observable<any> {
    const tabla = JSON.parse(localStorage.getItem('carreras'));
    tabla.splice( tabla.findIndex(element => element.id === id), 1 );
    localStorage.setItem('carreras', JSON.stringify(tabla));
    return from(tabla);
  }
  deleteRecordFB$(id: string): Observable<any> {
    return from(this.afs.doc<CarreraI>(`palistas/${id}`).delete());
  }

  addCarrerasLS$(tabla ) {
    localStorage.setItem('carreras', JSON.stringify(tabla));
    return from(tabla);
  }

  addDetalleCarrerasLS$(tabla ) {
    localStorage.setItem('detalleCcarreras', JSON.stringify(tabla));
    return from(tabla);
  }

  getDetalleCarreraLS$(id: string): Observable<DetalleCarreraI[]> {
    const carreras: DetalleCarreraI[] = JSON.parse(localStorage.getItem('detalleCcarreras'));
    const carrera = carreras.filter( elemento => elemento.idCarrera === id);
    return of( carrera );
  }
}
