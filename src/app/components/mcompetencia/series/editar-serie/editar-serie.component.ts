import { Component, OnInit } from '@angular/core';
import { DetalleSerieI, SerieI, SeriesI } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/series.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar-serie.component.html',
  styles: []
})
export class EditarSerieComponent implements OnInit {
  titulo = '';
  id = '';
  series = ['0011', '0012', '0013'];
  serie: SerieI;
  columnas: SeriesI[] = [];

  constructor(
    public dataService: SeriesService, 
    private msgService: MensajesService,
    private spinner: SpinnerService,
    private location: Location, 
    private actRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.id = '0011'; //this.actRoute.snapshot.paramMap.get('id');
    this.msgService.clearMessages();
    this.getRecords();
    this.getSerie();
  }

  getRecords() {
    console.log('series', this.series);
    this.series.forEach( elemento => {
      this.dataService.getDetalleSerieLS$(elemento).subscribe(
        data => this.columnas.push({serie: elemento, detalleSerie:data}));
    });
  }

  getSerie() {
    this.dataService.getRecord$(this.id).subscribe(data => this.serie = data);
  }

  retornar() {
    this.spinner.off();
    this.router.navigate(['series']);
  }

  onSave() {

  }

  goBack() {
    this.location.back();
  }
}
