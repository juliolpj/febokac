import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { SeriesService } from "src/app/services/series.service";
import { SeriesI, SerieI, DetalleSerieI } from "src/app/models/serie";
import { Router } from "@angular/router";
import { MsgService } from 'src/app/services/msg.service';

@Component({
  selector: 'app-generar-semis',
  templateUrl: './generar-semis.component.html',
  styleUrls: ['./generar-semis.component.scss']
})
export class GenerarSemisComponent implements OnInit {
  mostrarSeries = false;
  title = "angular-drag-drop";
  series: SeriesI[] = [];
  condiciones = {
    pasanDirectoAfinal: [1,2,3],
    pasanAsemiFinal: [4,5,6,7],
    adicional: { posicion:[8], cantidad:1}
  }

  constructor(
    private dataService: SeriesService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private msg: MsgService
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  filtrarSeries(objFiltro) {
    this.series = [];
    const arrSeries: string[] = this.dataService.getSeries()
      .filter( elemento => elemento.genero === objFiltro.genero && elemento.categoria === objFiltro.categoria && elemento.distancia === objFiltro.distancia)
      .map(elemento => elemento.id);
    this.getSeries(arrSeries);
    this.seleccionarAdicional();
    this.mostrarSeries = true;
  }

  seleccionarAdicional() {
    const arr = this.series.map(elemento => elemento.detalleSerie.map( el => {return {serie: elemento.serie, ...el}}) )
      .reduce( (a,b) => a.concat(b))
      .filter( elemento => elemento.resultado === 'Revisión')
      .sort( (a, b) => a.tiempo < b.tiempo ? -1 : a.tiempo < b.tiempo ? 1 : 0)
    
    arr.forEach( (el, index)=> {
      const indexSerie = this.series.findIndex( serie => serie.serie === el.serie);
      const indexPalista = this.series[indexSerie].detalleSerie.findIndex(palista => palista.id === el.id);

      if (index + 1 <= this.condiciones.adicional.cantidad) {
        this.series[indexSerie].detalleSerie[indexPalista].resultado = 'Pasa a semifinal';
      } else {
        this.series[indexSerie].detalleSerie[indexPalista].resultado = 'Eliminado';
      }
    });
  }

  getSeries(arrFiltro: string[]) {
    if (arrFiltro) {
      arrFiltro.forEach(elemento =>
        this.series.push({
          serie: elemento,
          detalleSerie: this.dataService.getDetalleSerie(elemento)
        })
      ); 
    } else {
      this.series = null;
    }
  }

  get SerieIds(): string[] {
    return this.series.map(serie => serie.serie);
  }

  resultadoClass(resultado) {
    return {
     "text-primary": resultado === 'Pasa directo a la final',
     "text-success": resultado === 'Pasa a semifinal',
     "text-warning": resultado === 'Revisión',
     "text-danger": resultado === 'Eliminado'
   }
  }
  onTalkDrop(event: CdkDragDrop<DetalleSerieI[]>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given task to the target data array. This happens if
    // a task has been dropped on a different track.
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onTrackDrop(event: CdkDragDrop<DetalleSerieI[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  limpiarFiltro() {
    this.getSeries(null);
    this.cdRef.detectChanges();
    this.mostrarSeries = false;
  }

  guardarCambios(obj) {
    const finales = this.dataService.getFinales();
    const idFinal = finales.find( el =>  el.genero === obj.genero && el.categoria === obj.categoria && el.distancia === obj.distancia).id;
    const finalDetalle = [];

    const semis = this.dataService.getSemis();
    const idSemis = semis.find( el =>  el.genero === obj.genero && el.categoria === obj.categoria && el.distancia === obj.distancia).id;
    const semisDetalle = [];

    for (let i = 0; i < this.series.length; i++) {
      for (let j = 0; j < this.series[i].detalleSerie.length; j++) {
        let palista = this.series[i].detalleSerie[j];
        switch (palista.resultado) {
          case 'Pasa directo a la final':
            let registro = { ...palista};
            registro.idSerie = idFinal;
            registro.tiempo = '';
            registro.numero = '';
            registro.posicion = 0;
            registro.resultado = '';
            finalDetalle.push(registro);
            break;

          case 'Pasa a semifinal':
            registro = { ...palista};
            registro.idSerie = idSemis;
            registro.tiempo = '';
            registro.numero = '';
            registro.posicion = 0;
            registro.resultado = '';
            semisDetalle.push(registro);
            break;
        
          default:
            break;
        }
      }
      
    }

    this.dataService.updateDetalleFinales(idFinal, finalDetalle);
    this.dataService.updateDetalleSemis(idFinal, semisDetalle);
    this.msg.ok('Proceso realizado satisfactoriamente');
    this.limpiarFiltro();

    // TODO 
    // Detalle de semifinales no funciona si hay que generar más de una semifinal.
  }


  salir() {
    this.router.navigate(["/"]);
  }
}
