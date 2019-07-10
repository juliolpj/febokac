import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetalleSerieI, SerieI } from 'src/app/models/serie';

@Component({
  selector: 'app-series-header',
  templateUrl: './series-header.component.html',
  styles: []
})
export class SeriesHeaderComponent implements OnInit {
  @Input() serie: SerieI;
  @Input() titulo: string;
  @Output() emitGuardar = new EventEmitter<string>(); 
  @Output() emitCancelar = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onSave() {
    this.emitGuardar.emit('Guardar');
  }

  goBack(){
    this.emitCancelar.emit('Cancelar');
  }
}
