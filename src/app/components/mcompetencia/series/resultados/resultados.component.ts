import { DetalleSerieI } from 'src/app/models/serie';
import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: []
})
export class ResultadosComponent implements OnInit {
  titulo = '';
  id = '';
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
  }

  getRecords() {
    this.dataService.getDetalleSerieLS$(this.id).subscribe(
      data => {
        this.tabla = data;
        console.log(this.tabla);
        this.tabla.sort( (a,b) => a.tiempo > b.tiempo ? 1 : (a.tiempo < b.tiempo ? - 1 : 0));
        console.log(this.tabla);
      }
    );
  }
  
  retornar() {
    this.spinner.off();
    this.router.navigate(['cargar-tiempos']);
  }

  onSave() {
    this.dataService.addDetalleSeriesLS$(this.tabla).subscribe(
      data => this.msgService.sendMessage(' Tiempos guardados satisfactoriamente'),
      error => this.msgService.sendMessage('Error al guardar los datos: ' + error.statusText, 'alert-danger'),
      () => this.retornar()
    );
  }

  goBack() {
    this.location.back();
  }
}
