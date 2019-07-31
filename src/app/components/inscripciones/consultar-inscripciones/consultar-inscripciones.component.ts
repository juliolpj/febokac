import { Component, OnInit } from '@angular/core';
import { InscripcionI } from 'src/app/models/inscripcion';
import { UserI } from 'src/app/models/user';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { UtilService } from 'src/app/services/util.service';
import { DistanciasService } from 'src/app/services/distancias.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ClubesService } from 'src/app/services/clubes.service';
import { ClubI } from 'src/app/models/club';
import { CategoriaI } from 'src/app/models/categoria';
import { DistanciaI } from 'src/app/models/distancia';

@Component({
  selector: 'app-consultar-inscripciones',
  templateUrl: './consultar-inscripciones.component.html',
  styles: []
})
export class ConsultarInscripcionesComponent implements OnInit {
  todasLasInscripciones: InscripcionI[];
  tabla: InscripcionI[];
  usuario: UserI;
  tblClubes: ClubI[];
  tblCategorias: CategoriaI[];
  tblDistancias: DistanciaI[];

  constructor(private dataService: InscripcionesService, 
              public utilService: UtilService,
              private clubesService: ClubesService,
              private categoriasService: CategoriasService,
              private distanciasService: DistanciasService) {

  }

  ngOnInit() {
    this.getRecords();
    this.clubesService.getRecords$().subscribe(data => this.tblClubes = data);
    this.categoriasService.getRecords$().subscribe( data => this.tblCategorias = data );
    this.distanciasService.getRecords$().subscribe( data => this.tblDistancias = data );
  }
  
  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: InscripcionI[]) => {
        this.tabla = data;
        this.tabla.sort( (a,b) => a.club > b.club ? 1 : a.club < b.club ? -1 : 0);
        console.log("TCL: ConsultarInscripcionesComponent -> getRecords -> this.tabla", this.tabla)
        this.todasLasInscripciones = this.tabla;
      }
    );
  }

  filtrarInscripciones(evento) {
    this.tabla = this.dataService.queryRecords$(this.todasLasInscripciones, evento);

  }
}
