import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-competencias',
  templateUrl: './navbar-competencias.component.html',
  styles: [``]
})
export class NavbarCompetenciasComponent implements OnInit {
  @Input() usuario;
  @Output() emitLogout = new EventEmitter<string>();
  fecha = new Date();
  constructor() { }

  ngOnInit() {
    console.log(this.fecha);
  }

  onLogout() {
    this.emitLogout.emit('salir');
  }
}
