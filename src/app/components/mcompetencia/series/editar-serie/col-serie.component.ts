import { Component, OnInit, Input } from '@angular/core';
import { SerieI, DetalleSerieI } from 'src/app/models/serie';

@Component({
  selector: 'app-col-serie',
  templateUrl: './col-serie.component.html',
  styles: []
})
export class ColSerieComponent implements OnInit {
  @Input() tabla: DetalleSerieI[];
  constructor() { }

  ngOnInit() {
  }

}
