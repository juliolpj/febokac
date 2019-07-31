import { Component, OnInit } from '@angular/core';
import { DistanciaI } from 'src/app/models/distancia';
import { DistanciasService } from 'src/app/services/distancias.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-distancias',
  templateUrl: './distancias.component.html',
  styles: ['']
})
export class DistanciasComponent implements OnInit {
  tabla: DistanciaI[];
  idCompetencia = '';

  constructor(private dataService: DistanciasService,
              private actRoute: ActivatedRoute,) {

  }

  ngOnInit() {
    this.idCompetencia = this.actRoute.snapshot.url[1].path;
   
    // this.getRecords();
    this.getDistancias();
  }

  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: DistanciaI[]) => {
        this.tabla = data;
      }
    );
  }

  getDistancias() {
    this.dataService.getAllEnCompetencia$(this.idCompetencia).subscribe(
      data => this.tabla = data
    );
  }
}

