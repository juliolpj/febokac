import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { SerieI } from 'src/app/models/serie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styles: []
})
export class SeriesComponent implements OnInit {
  tipoCarrera = '';
  titulo = '';
  tabla: SerieI[];
  constructor(
    private dataService: SeriesService,
    private actRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(
      params => {
        this.tipoCarrera = params.get('tipoCarrera');
        this.titulo = this.tipoCarrera === 'series' ? 'Series' : 
                      this.tipoCarrera === 'semis' ? 'Semifinales' : 'Finales';
        this.getRecords();
      }
    )
    
  }

  getRecords() {
    console.log(this.tipoCarrera);
    /* if (this.tipoCarrera === 'series') {
      this.dataService.getRecords$().subscribe(data => this.tabla = data);
    } else { */
      this.tabla = this.dataService.getCarreras(this.tipoCarrera);
    //} 
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
