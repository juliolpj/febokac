import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-administracion',
  templateUrl: './navbar-administracion.component.html',
  styles: []
})
export class NavbarAdministracionComponent implements OnInit {
  @Input() usuario;
  @Output() emitLogout = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    this.emitLogout.emit('salir');
  }
}
