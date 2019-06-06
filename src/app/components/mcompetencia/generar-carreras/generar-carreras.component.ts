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
  inscripciones = [];
  carreras = [];
  detalleCarreras = [];
  clubes = [];
  constructor(private router: Router, 
    private location: Location,
    private msgService: MensajesService,
    private inscripcionesService: InscripcionesService,
    private dataService: CarrerasService) {

  }

  ngOnInit() {
    this.cargarInscripciones();
    this.generarCarreras();

  }

  cargarInscripciones() {

    this.inscripcionesService.getRecords$().subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].distancia.length; j++) {
            this.inscripciones.push({...data[i], distancia: data[i].distancia[j]});
          }
        }
        this.generarClubes();
        this.generarCarreras();
        this.generarDetalleCarreras();
      }
    )
  }

  generarClubes() {
    this.inscripciones.forEach( elemento => {
      if (this.clubes.indexOf(elemento.club) === -1) {
        this.clubes.push(elemento.club);
      }
    });
  }

  generarCarreras() {
    let contador = 1;
    this.inscripciones.forEach( inscripcion => {
      let registro = this.generarObjetoCarrera(inscripcion, contador);
      let indice = this.carreras.findIndex( 
        elemento => elemento.categoria === registro.categoria && 
                    elemento.genero === registro.genero &&
                    elemento.distancia === registro.distancia
      );
      if (indice === -1) {
        indice = this.carreras.push(registro) - 1;
        contador = contador + 1;
      }
      this.carreras[indice].cantidad++;
    });
  }

  generarObjetoCarrera(data, contador: number) {
    return { 
      id: contador.toString().padStart(4, '0'),
      categoria: data.categoria, 
      genero: data.genero, 
      distancia: data.distancia,
      cantidad: 0
    };
  }

  
  /*
  Recorre la tabla de inscripciones e incluir a cada participante en su respectiva carrera.
  */
  generarDetalleCarreras() {
    this.inscripciones.forEach( inscripcion => {
      let carrera = this.carreras.find( 
                      carrera => carrera.categoria === inscripcion.categoria && 
                      carrera.genero === inscripcion.genero &&
                      carrera.distancia === inscripcion.distancia
      );
      if (! !!carrera) {
        console.error('No se genero una carrera para esta inscripción');
      }
      this.detalleCarreras.push({
        ...inscripcion, 
        idCarrera: carrera.id,
        tiempo: '',
        nTiempo: 0,
      });
    });

    console.table(this.detalleCarreras);
  }

  onGenerar() {
    /* TODO: Verificar que no existan carreras, 
        si hay carreras mostrar warning, 
        si las carreras tienen tiempos cargados impedir generar carreras.
    */
    this.dataService.addCarrerasLS$(this.carreras).subscribe(
      () => 
        this.dataService.addDetalleCarrerasLS$(this.detalleCarreras).subscribe(
          () => this.msgService.sendMessage('Proceso realizado satisfactoriamente')
      ),
      () => this.msgService.sendMessage('Error generando las carreras', 'alert-danger'),
      () => this.router.navigate(['home'])
    );
  }

  goBack() {
    this.location.back();
  }
}
