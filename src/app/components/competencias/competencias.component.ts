import { Component, OnInit } from '@angular/core';
import { CompetenciaI } from 'src/app/models/competencia';
import { CompetenciasService } from 'src/app/services/competencias.service';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styles: ['']
})
export class CompetenciasComponent implements OnInit {
  tabla: CompetenciaI[];

  constructor(private dataService: CompetenciasService) {

  }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: CompetenciaI[]) => {
        this.tabla = data;
      }
    );
  }
}
