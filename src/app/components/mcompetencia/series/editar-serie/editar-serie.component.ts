import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { SeriesService } from "src/app/services/series.service";
import { SeriesI, SerieI, DetalleSerieI } from "src/app/models/serie";
import { MensajesService } from "src/app/services/mensajes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-editar-serie",
  templateUrl: "./editar-serie.component.html",
  styleUrls: ["./editar-serie.component.scss"]
})
export class EditarSerieComponent implements OnInit {
  title = "angular-drag-drop";
  series: SeriesI[] = [];

  constructor(
    private dataService: SeriesService,
    private mensajesService: MensajesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSeries();
    this.mensajesService.sendMessage("true", "Activar botón guardar");

    this.mensajesService.getMessage().subscribe(msg => {
      if (msg.tipo === "Ejecutar botón guardar") {
        this.guardarCambios();
      }
    });
  }

  ngOnDestroy() {
    this.mensajesService.sendMessage("false", "Activar botón guardar");
  }

  getSeries() {
    const arrSeries: SerieI[] = this.dataService.getSeries();
    arrSeries
      .filter(elemento => ["0001","0002","0003","0011", "0012"].includes(elemento.id))
      .forEach(elemento =>
        this.series.push({
          serie: elemento.id,
          detalleSerie: this.dataService.getDetalleSerie(elemento.id)
        })
      );
  }

  get SerieIds(): string[] {
    return this.series.map(serie => serie.serie);
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

  guardarCambios() {
    this.actualizarIdSerie();
    this.series.forEach(serie =>
      this.dataService.updateDetalleSeries(serie.serie, serie.detalleSerie)
    );
    this.router.navigate["/"];
  }

  actualizarIdSerie() {
    this.series.forEach(serie =>
      serie.detalleSerie.map(palista => {
        palista.idSerie = serie.serie;
        return palista;
      })
    );
  }
}
