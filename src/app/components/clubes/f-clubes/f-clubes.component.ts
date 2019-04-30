import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClubI } from 'src/app/models/club';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-f-clubes',
  templateUrl: './f-clubes.component.html',
  styleUrls: ['./f-clubes.component.css']
})
export class FClubesComponent implements OnInit {
  @Input() frmStatus: string;
  @Input() registro: ClubI;
  @Output() botonAceptar = new EventEmitter<ClubI>();
  @Output() botonCancelar = new EventEmitter<string>();

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

}
