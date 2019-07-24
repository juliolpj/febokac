import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { SeriesService } from "src/app/services/series.service";
import { SeriesI, SerieI, DetalleSerieI } from "src/app/models/serie";
import { ActivatedRoute, Router } from "@angular/router";
import { MsgService } from 'src/app/services/msg.service';

@Component({
  selector: 'app-generar-finales',
  templateUrl: './generar-finales.component.html',
  styleUrls: ['./generar-finales.component.scss']
})
export class GenerarFinalesComponent implements OnInit {
  mostrarSeries = false;
  title = "angular-drag-drop";
  tipoCarrera = '';
  series: SeriesI[] = [];
  condiciones = {
    semis: {
      pasanDirectoAfinal: [1,2,3],
      pasanAsemiFinal: [4,5,6,7],
      adicional: { posicion:[8], cantidad:1}
    },
    finales: {
      pasanAfinal: [1,2,3]
    }
  }

  constructor(
    private dataService: SeriesService,
    private actRoute: ActivatedRoute,
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
    const arrSeries: string[] = this.dataService.getCarreras('semis')
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

    });
  }

  getSeries(arrFiltro: string[]) {
    if (arrFiltro) {
      arrFiltro.forEach(elemento =>
        this.series.push({
          serie: elemento,
          detalleSerie: this.dataService.getDetalleCarrera('semis', elemento)
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
     "text-success": resultado === 'Pasa a la final',
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
    const finalDetalle = this.dataService.getDetalleCarrera(this.tipoCarrera, idFinal);

    for (let i = 0; i < this.series.length; i++) {
      for (let j = 0; j < this.series[i].detalleSerie.length; j++) {
        let palista = this.series[i].detalleSerie[j];
        switch (palista.resultado) {
          case 'Pasa a la final':
            let registro = { ...palista};
            registro.idSerie = idFinal;
            registro.tiempo = '';
            registro.numero = '';
            registro.posicion = 0;
            registro.resultado = '';
            finalDetalle.push(registro);
            break;

          default:
            break;
        }
      }
      
    }

    this.dataService.updateDetalleFinales(idFinal, finalDetalle);
    this.msg.ok('Proceso realizado satisfactoriamente');
    this.limpiarFiltro();

  }


  salir() {
    this.router.navigate(["/"]);
  }
}
