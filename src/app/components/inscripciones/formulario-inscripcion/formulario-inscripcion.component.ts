import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PalistaI } from 'src/app/models/palista';
import { NgForm } from '@angular/forms';
import { InscripcionI } from 'src/app/models/inscripcion';
import { registerContentQuery } from '@angular/core/src/render3';


@Component({
  selector: 'app-formulario-inscripcion',
  templateUrl: './formulario-inscripcion.component.html',
  styleUrls: ['./formulario-inscripcion.component.css']
})
export class FormularioInscripcionComponent implements OnInit {
  @Input() frmStatus: string;
  @Input() registro: InscripcionI;
  @Input() palistas: Array<PalistaI>;
  @Output() botonAceptar = new EventEmitter<InscripcionI>();
  @Output() botonCancelar = new EventEmitter<string>();

  carreras = [
    { embarcacion: 'K1', distancia: 1000 },
    { embarcacion: 'K1', distancia: 2000 },
    { embarcacion: 'K1', distancia: 4000 },
    { embarcacion: 'K1', distancia: 12000 },
    { embarcacion: 'K1', distancia: 16000 },
    { embarcacion: 'K2', distancia: 1000 },
    { embarcacion: 'K2', distancia: 2000 },
    { embarcacion: 'K2', distancia: 4000 },
    { embarcacion: 'k2', distancia: 12000 },
    { embarcacion: 'k2', distancia: 1000 },
    { embarcacion: '430', distancia: 1000 },
    { embarcacion: '430', distancia: 2000 },
    { embarcacion: '430', distancia: 4000 },
    { embarcacion: '430', distancia: 12000 },
    { embarcacion: '430', distancia: 1000 }
  ]

  constructor() {
  }

  ngOnInit() {
  }

  aceptar(miForm: NgForm) {
    this.botonAceptar.emit(this.registro);
    miForm.resetForm();
  }

  cancelar(miForm: NgForm) {
    this.botonCancelar.emit('Consultar');
    miForm.resetForm();
  }

  selectPalista(valor) {
    console.log('valor: ', valor);
    
    const palista = this.palistas.find( element => element.palista === valor);
    this.registro = Object.assign({}, palista);
   
  }

  onChangeCB() {
    console.log(this.registro);
  }
}
