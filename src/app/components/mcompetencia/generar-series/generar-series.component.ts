import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Location } from '@angular/common';
import { InscripcionI } from 'src/app/models/inscripcion';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-generar-series',
  templateUrl: './generar-series.component.html',
  styles: []
})
export class GenerarSeriesComponent implements OnInit {
  inscripciones = [];
  series = [];
  detalleSeries = [];
  clubes = [];
  constructor(private router: Router, 
    private location: Location,
    private msgService: MensajesService,
    private inscripcionesService: InscripcionesService,
    private dataService: SeriesService) {

  }

  ngOnInit() {
    this.cargarInscripciones();

  }

  cargarInscripciones() {

    this.inscripcionesService.getRecords$().subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].distancia.length; j++) {
            this.inscripciones.push({...data[i], distancia: data[i].distancia[j]});
          }
        }
        this.inscripciones.sort(
          (a, b) => a.categoria + a.genero + a.distancia > b.categoria + b.genero + b.distancia ? -1 : 0
        );
        this.generarClubes();
        this.generarSeries();

        //this.generarDetalleSeries();
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

  generarSeries() {
    let condicionPrueba = (inscripcion ) => inscripcion.categoria === 'Infantiles' && inscripcion.genero === 'Masculino' && inscripcion.distancia === 'K1 200 m';
    let numCarrera = 0;

    let i = 0;
    while (i < this.inscripciones.length) {
      let elemento = this.inscripciones[i];

      numCarrera++;
      let registro = this.generarObjetoSerie(elemento, numCarrera);
      this.series.push(registro);

      while ( i < this.inscripciones.length && 
              elemento.categoria + elemento.genero + elemento.distancia === 
              registro.categoria + registro.genero + registro. distancia &&
              this.series[numCarrera - 1].cantidad < 9 ) {

        this.series[numCarrera - 1].cantidad++;
        this.detalleSeries.push( {...elemento, idSerie: registro.id, tiempo: '', nTiempo: 0 } );
        i++;
        elemento = this.inscripciones[i];
      }
    }
   
  }

  generarObjetoSerie(data, contador: number) {
    return { 
      id: contador.toString().padStart(4, '0'),
      categoria: data.categoria, 
      genero: data.genero, 
      distancia: data.distancia,
      cantidad: 0,
      status: { asignarNumero: false, cargarTiempos: false,  generarResultados: false }
    };
  }

  
  /*
  Recorre la tabla de inscripciones para incluir a cada participante en su respectiva serie.
  */
  generarDetalleSeries() {
    let i = 0;
    while ( i < this.series.length) {
      let serie = this.series[i];
      let inscripcionesDeLaSerie = this.inscripciones.filter( elemento =>
        elemento.categoria === serie.categoria &&
        elemento.genero === serie.genero &&
        elemento.distancia === serie.distancia);
      
      
    }
  }

  generarDetalleSeries2() {
    this.inscripciones.forEach( inscripcion => {
      let serie = this.series.find( 
                      serie => serie.categoria === inscripcion.categoria && 
                      serie.genero === inscripcion.genero &&
                      serie.distancia === inscripcion.distancia
      );
      if (! !!serie) {
        console.error('No se genero una serie para esta inscripción');
      }
      this.detalleSeries.push({
        ...inscripcion, 
        idSerie: serie.id,
        tiempo: '',
        nTiempo: 0,
      });
    });

  }

  onGenerar() {
    /* TODO: Verificar que no existan series, 
        si hay series mostrar warning, 
        si las series tienen tiempos cargados impedir generar series.
    */
    this.dataService.addSeriesLS$(this.series).subscribe(
      () => 
        this.dataService.addDetalleSeriesLS$(this.detalleSeries).subscribe(
          () => this.msgService.sendMessage('Proceso realizado satisfactoriamente')
      ),
      () => this.msgService.sendMessage('Error generando las series', 'alert-danger'),
      () => this.router.navigate(['home'])
    );
  }

  goBack() {
    this.location.back();
  }
}
