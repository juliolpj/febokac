import { Component, OnInit } from '@angular/core';
import { ClubI } from 'src/app/models/club';
import { ClubesService } from 'src/app/services/clubes.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styles: ['']
})
export class ClubesComponent implements OnInit {
  tblOrden = {dni: 0, nombre: 0, fnacimiento:0};
  registro: ClubI = {};
  tabla: Array<ClubI>;

  constructor( private dataService: ClubesService, 
               private msgService: MensajesService) { }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: ClubI[]) => {
        this.tabla = data;
      }
    );
  }

  ordenar(propiedad) {
    let orden = 0;
    if (this.tblOrden[propiedad] === 1) {
      orden = 2;
      this.tabla.sort( 
        (a, b) => a[propiedad] < b[propiedad] ? 1 : b[propiedad] < a[propiedad] ? -1 : 0 );
    } else {
      orden = 1;
      this.tabla.sort( 
        (a, b) => a[propiedad] > b[propiedad] ? 1 : b[propiedad] > a[propiedad] ? -1 : 0 );
    }

    for (const prop in this.tblOrden) {
      this.tblOrden[prop] = 0;
    }
    this.tblOrden[propiedad] = orden;

  }
  
}
