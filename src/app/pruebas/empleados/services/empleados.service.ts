import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { EmpleadoI } from 'src/app/pruebas/empleados/empleados.interface';
import { SwitcherService } from './switcher.service';

import { Observable, from, of } from "rxjs";
import { map, find, filter, switchMap, mergeMap, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EmpleadosService {
  private collection: AngularFirestoreCollection<EmpleadoI>;

  constructor(private afs: AngularFirestore, private switcher: SwitcherService) {
    this.collection = this.afs.collection<EmpleadoI>("empleados");
  }

  getRecords$(): Observable<EmpleadoI[]> {
    return this.switcher.almacenamiento == 'LocalStorage' ? this.getRecordsLS$() : this.getRecordsFB$();
  }
  getRecordsLS$(): Observable<EmpleadoI[]> {
    return of( JSON.parse(localStorage.getItem('empleados') ));
  }
  getRecordsFB$(): Observable<EmpleadoI[]> {
    return this.collection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as EmpleadoI;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
  }

  getRecord$(id: string): Observable<EmpleadoI> {
    return this.switcher.almacenamiento == 'LocalStorage' ? this.getRecordLS$(id) :this.getRecordFB$(id);
  }
  getRecordLS$(id: string): Observable<EmpleadoI> {
    const empleado = this.getRecordsLS$().pipe(
      map( data => data.filter( element => element.id === id)),
      mergeMap( data => data)
    );
    return empleado;
  }
  getRecordFB$(id: string): Observable<EmpleadoI> {
    return this.afs.doc<EmpleadoI>(`empleados/${id}`).valueChanges();
  }

  addRecord$(registro: EmpleadoI) {
    return this.switcher.almacenamiento == 'LocalStorage' ? this.addRecordLS$(registro) : this.addRecordFB$(registro);
  }
  addRecordLS$(registro: EmpleadoI) {
    const tabla = JSON.parse(localStorage.getItem('empleados'));
    registro.id = this.generarID();
    tabla.push(registro);
    localStorage.setItem('empleados', JSON.stringify(tabla));
    return from(tabla);
  }
  addRecordFB$(registro: EmpleadoI) {
    return from(this.collection.add(registro));
  }

  updateRecord$(id: string, registro: EmpleadoI): Observable<any> {
    if (this.switcher.almacenamiento == 'LocalStorage')  {
      return this.updateRecordLS$(id, registro);
    } else {
      return this.updateRecordFB$(id, registro);
    }
  }
  updateRecordLS$(id: string, registro: EmpleadoI) {
    registro.id = id;
    const tabla = JSON.parse(localStorage.getItem('empleados'));
    tabla.splice( tabla.findIndex(element => element.id === id), 1, registro );
    localStorage.setItem('empleados', JSON.stringify(tabla));
    return from(tabla);
  }
  updateRecordFB$(id: string, registro: EmpleadoI) {
    return from(this.afs.doc<EmpleadoI>(`empleados/${id}`).update(registro));
  }

  deleteRecord$(id: string): Observable<any> {
    return this.switcher.almacenamiento == 'LocalStorage' ? 
            this.deleteRecordLS$(id) : this.deleteRecordFB$(id);
  }
  deleteRecordLS$(id: string) {
    const tabla = JSON.parse(localStorage.getItem('empleados'));
    tabla.splice( tabla.findIndex(element => element.id === id), 1 );
    localStorage.setItem('empleados', JSON.stringify(tabla));
    return from(tabla);
  }
  deleteRecordFB$(id: string) {
    return from(this.afs.doc<EmpleadoI>(`empleados/${id}`).delete());
  }

  pruebaSetLocalData(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  pruebaGetLocalData(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  generarID() {
    const fecha = new Date();
    const año = fecha.getFullYear().toString().padStart(4, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const dia = fecha.getDate().toString().padStart(2, '0');

    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    const ms = fecha.getMilliseconds().toString().padStart(1, '0');
    return 'local' + año + mes + dia + hora + minutos + segundos + ms;
  }
}
