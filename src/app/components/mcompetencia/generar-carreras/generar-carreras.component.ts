import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Location } from '@angular/common';
import { InscripcionI } from 'src/app/models/inscripcion';
import { CarrerasService } from 'src/app/services/carreras.service';

@Component({
  selector: 'app-generar-carreras',
  templateUrl: './generar-carreras.component.html',
  styles: []
})
export class GenerarCarrerasComponent implements OnInit {
  carreras = [];
  clubes = [];
  constructor(private router: Router, 
    private location: Location,
    private msgService: MensajesService,
    private inscripcionesService: InscripcionesService,
    private dataService: CarrerasService) {

  }

  ngOnInit() {
    this.generarCarreras();

  }
  /*
  Recorre la tabla de inscripciones y genera una carrera por categoría, genero y distancia.
  */
  generarCarreras() {
    console.log('Entro a cargar tabla');
    let tabla = [];
    let clubes = [];
    let indice = 0;

    this.inscripcionesService.getRecords$().subscribe(
      data => {
        let registro = this.generarObjetoCarrera(data[0], 0);
        tabla.push(registro);
        clubes.push(data[0].club);
        
        for (let i = 0; i < data.length; i++) {
          clubes.indexOf(data[i].club) === -1 ? clubes.push(data[i].club) : null;
          for (let j = 0; j < data[i].distancia.length; j++) {
            registro = this.generarObjetoCarrera(data[i], j);

            indice = tabla.findIndex( 
              elemento => elemento.categoria === registro.categoria && 
                          elemento.genero === registro.genero &&
                          elemento.distancia === registro.distancia
            );
            
            if (indice === -1) {
              indice = tabla.push(registro) - 1;
            }
            tabla[indice].cantidad++;

          }
        }
        this.carreras = tabla;
        this.clubes = clubes;
      }
    )
  }

  generarObjetoCarrera(data: InscripcionI, indiceDistancia: number) {
    return { 
      categoria: data.categoria, 
      genero: data.genero, 
      distancia: data.distancia[indiceDistancia],
      cantidad: 0
    };
  }

  onGenerar() {
    /* TODO: Verificar que no existan carreras, 
        si hay carreras mostrar warning, 
        si las carreras tienen tiempos cargados impedir generar carreras.
    */
    this.dataService.addRecordsLS$(this.carreras).subscribe(
      () => this.msgService.sendMessage('Proceso realizado satisfactoriamente'),
      () => this.msgService.sendMessage('Error generando las carreras', 'alert-danger'),
      () => this.router.navigate(['home'])
    );
  }

  goBack() {
    this.location.back();
  }
}
