import { Component, OnInit } from '@angular/core';
import { CarrerasService } from 'src/app/services/carreras.service';
import { CarreraI } from 'src/app/models/carrera';

@Component({
  selector: 'app-cargar-tiempos',
  templateUrl: './cargar-tiempos.component.html',
  styles: []
})
export class CargarTiemposComponent implements OnInit {
  tabla: CarreraI[];

  constructor(private dataService: CarrerasService) {

  }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: CarreraI[]) => {
        this.tabla = data;
      }
    );
  }

}
