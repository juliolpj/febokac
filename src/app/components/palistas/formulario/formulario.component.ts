import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PalistaI } from 'src/app/models/palista';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() frmStatus: string;
  @Input() registro: PalistaI;
  @Output() botonAceptar = new EventEmitter<PalistaI>();
  @Output() botonCancelar = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  aceptar() {
    this.botonAceptar.emit(this.registro);
  }

  cancelar() {
    this.botonCancelar.emit('Consultar');
  }

}
