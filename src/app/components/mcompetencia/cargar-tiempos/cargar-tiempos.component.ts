import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { SerieI } from 'src/app/models/serie';

@Component({
  selector: 'app-cargar-tiempos',
  templateUrl: './cargar-tiempos.component.html',
  styles: []
})
export class CargarTiemposComponent implements OnInit {
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

}
