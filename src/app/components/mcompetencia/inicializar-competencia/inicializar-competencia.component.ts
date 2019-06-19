import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MensajesService } from 'src/app/services/mensajes.service';


@Component({
  selector: 'app-inicializar-competencia',
  templateUrl: './inicializar-competencia.component.html',
  styles: ['']
})
export class InicializarCompetenciaComponent implements OnInit {

  constructor(private location: Location, private msgService: MensajesService) {

  }

  ngOnInit() {
    
  }

  onSubmit() {
    this.limpiarLocalStorage();
  }

  goBack() {
    this.location.back();
  }

  limpiarLocalStorage() {
    localStorage.removeItem('carreras');
    localStorage.removeItem('superGlobal');
    localStorage.removeItem('palistas');
    localStorage.removeItem('clubes');
    localStorage.removeItem('empleados');
    localStorage.removeItem('distancias');
    localStorage.removeItem('detalleCcarreras');
    localStorage.removeItem('detalleCarreras');
    localStorage.removeItem('categorias');
    localStorage.removeItem('inscripciones');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('competencias');
    localStorage.removeItem('almacenamiento');
    localStorage.removeItem('users');

    this.msgService.sendMessage('Local Storage limpiado satisfactoriamente');
  }

  inicializarUsuario() {

  }
}
