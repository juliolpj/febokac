import { DetalleSerieI, SerieI } from 'src/app/models/serie';
import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cargar-tiempos',
  templateUrl: './cargar-tiempos.component.html',
  styles: []
})
export class CargarTiemposComponent implements OnInit {
  titulo = '';
  id = '';
  tipoCarrera = '';
  serie: SerieI;
  tabla: DetalleSerieI[];

  constructor(
    public dataService: SeriesService, 
    private msgService: MensajesService,
    private spinner: SpinnerService,
    private location: Location, 
    private actRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.tipoCarrera = this.actRoute.snapshot.paramMap.get('tipoCarrera');

    this.msgService.clearMessages();
    this.getRecords();
    this.getSerie();
  }

  getRecords() {
    this.tabla = this.dataService.getDetalleCarrera(this.tipoCarrera, this.id);
    this.tabla.sort( (a, b) => a.numero > b.numero ? 1 : a.numero < b.numero ? -1 : 0);
  }
  
  getSerie() {
    this.serie = this.dataService.getCarrera(this.tipoCarrera, this.id);
  }
  
  retornar() {
    this.spinner.off();
    this.router.navigate(['carreras/' + this.tipoCarrera]);
  }

  onSave() {
    let todosTienenTiempo = true;
    this.tabla.forEach(elemento => todosTienenTiempo = todosTienenTiempo && !!elemento.tiempo );
    this.serie.status = { asignarNumero: true, cargarTiempos: todosTienenTiempo, generarResultados: false };
    this.dataService.updateCarrera(this.tipoCarrera, this.id, this.serie);

    this.dataService.updateDetalleCarrera(this.tipoCarrera, this.id, this.tabla) ;
    this.msgService.sendMessage('Tiempos guardados satisfactoriamente');
    this.retornar();
  }

  goBack() {
    this.location.back();
  }
}

