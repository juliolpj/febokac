import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { SerieI, DetalleSerieI } from 'src/app/models/serie';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserI } from '../models/user';
import { UtilService } from './util.service';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private collection: AngularFirestoreCollection<SerieI>;
  private usuario: UserI;

  

  constructor(private afs: AngularFirestore,
              private authService: AuthService,
              public util: UtilService) {
    this.usuario = this.authService.getUser();
  }

  /* Métodos para Editar series con Drag and Drop */
  getSeries(): SerieI[] {
    return JSON.parse( localStorage.getItem('series') );
  }

  getDetalleSerie(id: string): DetalleSerieI[] {
    const series: DetalleSerieI[] = JSON.parse(localStorage.getItem('detalleSeries'));
    let serie = series.filter( elemento => elemento.idSerie === id)
    return serie;
  }
  
  updateDetalleSeries(id:string, tabla: DetalleSerieI[] ) {
    const series: DetalleSerieI[] = JSON.parse(localStorage.getItem('detalleSeries')).
      filter( elemento => elemento.idSerie !== id);
    localStorage.setItem('detalleSeries', JSON.stringify(series.concat(tabla)) );
  }
  /* */

  getRecords$(): Observable<SerieI[]> {
    return this.usuario.rol === 'Competencias' ? this.getRecordsLS$() : this.getRecordsFB$();
  }
  getRecordsLS$(): Observable<SerieI[]> {
    return of( JSON.parse(localStorage.getItem('series') ));
  }
  getRecordsFB$() {
    this.collection = this.afs.collection<SerieI>('series');
    return this.collection.snapshotChanges()
    .pipe( map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as SerieI;
        data.id = action.payload.doc.id;
        return data;
      })
    }));
  }

  getRecord$(id: string): Observable<SerieI> {
    const tabla: SerieI[] = JSON.parse(localStorage.getItem('series'));
    return of(tabla.find(elemento => elemento.id === id));
  }

  addRecord$(registro: SerieI){
    return this.usuario.rol === 'Competencias' ? this.addRecordLS$(registro) : this.addRecordFB$(registro);
  }
  addRecordLS$(registro: SerieI) {
    const tabla = JSON.parse(localStorage.getItem('series'));
    registro.id = this.util.generarID();
    tabla.push(registro);
    localStorage.setItem('series', JSON.stringify(tabla));
    return from(tabla);
  }
  addRecordFB$(registro: SerieI) {
    return from(this.collection.add(registro));
  }

  updateRecord$(id: string, registro: SerieI): Observable<any> {
    return this.usuario.rol === 'Competencias' ? this.updateRecordLS$(id, registro) : this.updateRecordFB$(id, registro);
  }
  updateRecordLS$(id: string, registro: SerieI): Observable<any> {
    registro.id = id;
    const tabla = JSON.parse(localStorage.getItem('series'));
    tabla.splice( tabla.findIndex(element => element.id === id), 1, registro );
    localStorage.setItem('series', JSON.stringify(tabla));
    return of(registro);
  }
  updateRecordFB$(id: string, registro: SerieI): Observable<any> {
    return from(this.afs.doc<SerieI>(`palistas/${id}`).update(registro));
  }

  deleteRecord$(id: string): Observable<any> {
    return this.usuario.rol === 'Competencias' ? this.deleteRecordLS$(id) : this.deleteRecordFB$(id);
  }
  deleteRecordLS$(id: string): Observable<any> {
    const tabla = JSON.parse(localStorage.getItem('series'));
    tabla.splice( tabla.findIndex(element => element.id === id), 1 );
    localStorage.setItem('series', JSON.stringify(tabla));
    return from(tabla);
  }
  deleteRecordFB$(id: string): Observable<any> {
    return from(this.afs.doc<SerieI>(`palistas/${id}`).delete());
  }

  addSeriesLS$(tabla ) {
    localStorage.setItem('series', JSON.stringify(tabla));
    return from(tabla);
  }

  addDetalleSeriesLS$(tabla ) {
    localStorage.setItem('detalleSeries', JSON.stringify(tabla));
    return from(tabla);
  }

  updateDetalleSeriesLS$(id, tabla ) {
    const series: DetalleSerieI[] = JSON.parse(localStorage.getItem('detalleSeries')).
      filter( elemento => elemento.idSerie !== id);
    localStorage.setItem('detalleSeries', JSON.stringify(series.concat(tabla)) );
    return from(tabla);
  }

  getDetalleSerieLS$(id: string): Observable<DetalleSerieI[]> {
    const series: DetalleSerieI[] = JSON.parse(localStorage.getItem('detalleSeries'));
    let serie = series.filter( elemento => elemento.idSerie === id)
    console.log("TCL: SeriesService -> serie", serie)
    serie = serie.sort((a, b) => parseInt(a.carril) - parseInt(b.carril) < 0 ? -1 : 0);
    console.log("TCL: SeriesService -> serie", serie)
    return of( serie );
  }
}
