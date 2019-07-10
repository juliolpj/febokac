import { Component, OnInit } from '@angular/core';
import { DetalleSerieI, SerieI } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/series.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asignar-numero',
  templateUrl: './asignar-numero.component.html',
  styles: []
})
export class AsignarNumeroComponent implements OnInit {
  titulo = '';
  id = '';
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
    this.msgService.clearMessages();
    this.getRecords();
    this.getSerie();
  }

  getRecords() {
    this.dataService.getDetalleSerieLS$(this.id).subscribe(
      data => this.tabla = data);
  }
  
  getSerie() {
    this.dataService.getRecord$(this.id).subscribe(data => this.serie = data);
  }

  retornar() {
    this.spinner.off();
    this.router.navigate(['series']);
  }

  onSave() {
    let todosTienenNumero = true;
    this.tabla.forEach(elemento => {
      todosTienenNumero = todosTienenNumero && !!elemento.numero && !!elemento.carril
    });

    this.serie.status = {asignarNumero: todosTienenNumero, cargarTiempos: false, generarResultados: false };
    this.dataService.updateRecord$(this.id, this.serie);

    this.dataService.updateDetalleSeriesLS$(this.id, this.tabla).subscribe(
      data => this.msgService.sendMessage(' Tiempos guardados satisfactoriamente'),
      error => this.msgService.sendMessage('Error al guardar los datos: ' + error.statusText, 'alert-danger'),
      () => this.retornar()
    );
  }

  goBack() {
    this.location.back();
  }
}

