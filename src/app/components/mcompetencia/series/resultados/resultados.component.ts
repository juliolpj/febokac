import { DetalleSerieI, SerieI, resultadoSerieI } from 'src/app/models/serie';
import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: []
})

export class ResultadosComponent implements OnInit {
  titulo = '';
  id = '';
  tipoCarrera = '';
  serie: SerieI;
  tabla: resultadoSerieI[] = [];
  condiciones = {
    serie: {
      pasanDirectoAfinal: [1,2,3],
      pasanAsemiFinal: [4,5,6,7],
      adicional: { posicion:[8], cantidad:[1]}
    },
    semis: {
      pasanAfinal: [1,2,3]
    }
  }

  constructor(
    public dataService: SeriesService, 
    private msgService: MensajesService,
    private spinner: SpinnerService,
    private location: Location, 
    private actRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.tipoCarrera = this.actRoute.snapshot.paramMap.get('tipoCarrera');
    
    this.msgService.clearMessages();
    this.getRecords();
    this.getSerie();
  }

  getRecords() {
    const data = this.dataService.getDetalleCarrera(this.tipoCarrera, this.id);
    data.sort( (a,b) => a.tiempo > b.tiempo ? 1 : (a.tiempo < b.tiempo ? - 1 : 0));
    data.forEach( (el, i)=> this.tabla.push({ ...el, posicion: i+1, resultado: this.resultado(i+1) }) );
  }

  resultado(posicion: number) {
    if (this.tipoCarrera === 'series')
      return this.resultadoSerie(posicion);
    else if (this.tipoCarrera === 'semis') {
      return this.resultadoSemi(posicion);
    }
  }

  resultadoSerie(posicion: number) {
    if ( this.condiciones.serie.pasanDirectoAfinal.includes(posicion) ) {
      return 'Pasa directo a la final';
    } else if (this.condiciones.serie.pasanAsemiFinal.includes(posicion)) {
      return 'Pasa a semifinal';
    } else if (this.condiciones.serie.adicional.posicion.includes(posicion)) {
      return 'Revisión';
    } else {
      return 'Eliminado';
    }
  }

  resultadoSemi(posicion: number) {
    if ( this.condiciones.semis.pasanAfinal.includes(posicion) ) {
      return 'Pasa a la final';
    } else {
      return 'Eliminado';
    }
  }

  resultadoClass(resultado) {
    if (this.tipoCarrera === 'series') {
      return {
       "text-primary": resultado === 'Pasa directo a la final',
       "text-success": resultado === 'Pasa a semifinal',
       "text-warning": resultado === 'Revisión',
       "text-danger": resultado === 'Eliminado'
     }
    } else if (this.tipoCarrera === 'semis') {
      return {
        "text-success": resultado === 'Pasa a la final',
        "text-danger": resultado === 'Eliminado'
      }
    }
  }

  getSerie() {
    this.serie = this.dataService.getCarrera(this.tipoCarrera, this.id);
  }

  retornar() {
    this.spinner.off();
    this.router.navigate(['carreras/' + this.tipoCarrera]);
  }

  onSave() {
    this.serie.status = {asignarNumero: true, cargarTiempos: true, generarResultados: true };
    this.dataService.updateCarrera(this.tipoCarrera, this.id, this.serie);
    this.dataService.updateDetalleCarrera(this.tipoCarrera, this.id, this.tabla);

    this.retornar();

  }

  goBack() {
    this.location.back();
  }
}
