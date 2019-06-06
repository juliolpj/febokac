import { Component, OnInit } from '@angular/core';
import { DistanciaI } from 'src/app/models/distancia';
import { DistanciasService } from 'src/app/services/distancias.service';

@Component({
  selector: 'app-distancias',
  templateUrl: './distancias.component.html',
  styles: ['']
})
export class DistanciasComponent implements OnInit {
  tabla: DistanciaI[];

  constructor(private dataService: DistanciasService) {

  }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: DistanciaI[]) => {
        this.tabla = data;
      }
    );
  }
}

