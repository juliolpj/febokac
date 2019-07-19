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
    pasanDirectoAfinal: [1,2,3],
    pasanAsemiFinal: [4,5,6,7],
    adicional: { posicion:[8], cantidad:[1]}
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
    if ( this.condiciones.pasanDirectoAfinal.includes(posicion) ) {
      return 'Pasa directo a la final';
    } else if (this.condiciones.pasanAsemiFinal.includes(posicion)) {
      return 'Pasa a semifinal';
    } else if (this.condiciones.adicional.posicion.includes(posicion)) {
      return 'Revisión';
    } else {
      return 'Eliminado';
    }
  }

  resultadoClass(resultado) {
    return {
     "text-primary": resultado === 'Pasa directo a la final',
     "text-success": resultado === 'Pasa a semifinal',
     "text-warning": resultado === 'Revisión',
     "text-danger": resultado === 'Eliminado'
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
    this.dataService.updateRecord$(this.id, this.serie);
    this.dataService.updateDetalleSeries(this.id, this.tabla);
    this.retornar();

    /* this.dataService.updateDetalleSeriesLS$(this.id, this.tabla).subscribe(
      data => this.msgService.sendMessage(' Tiempos guardados satisfactoriamente'),
      error => this.msgService.sendMessage('Error al guardar los datos: ' + error.statusText, 'alert-danger'),
      () => this.retornar()
    ); */
  }

  goBack() {
    this.location.back();
  }
}
