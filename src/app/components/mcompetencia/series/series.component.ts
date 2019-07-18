import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { SerieI } from 'src/app/models/serie';

@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styles: []
})
export class SeriesComponent implements OnInit {
  tabla: SerieI[];
  constructor(private dataService: SeriesService) {

  }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: SerieI[]) => {
        this.tabla = data;
      }
    );
  }
  
  asignarNumeroStatus(status) {
    return {
     "text-success": !status.asignarNumero,
     "text-warning": status.asignarNumero,
     "text-danger": status.cargarTiempos
   }
  }

  cargarTiemposStatus(status) {
    return {
     "text-secondary": !status.asignarNumero,
     "text-success": status.asignarNumero,
     "text-warning": status.cargarTiempos,
     "text-danger": status.generarResultados
   }
  }

  generarResultadosStatus(status) {
    return {
     "text-secondary": !status.cargarTiempos,
     "text-success": status.cargarTiempos,
     "text-warning": status.generarResultados,
   }
  }
}
