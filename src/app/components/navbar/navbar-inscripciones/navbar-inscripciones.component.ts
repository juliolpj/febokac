import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-inscripciones',
  templateUrl: './navbar-inscripciones.component.html',
  styles: []
})
export class NavbarInscripcionesComponent implements OnInit {
  @Input() usuario;
  @Output() emitLogout = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    this.emitLogout.emit('salir');
  }
}
