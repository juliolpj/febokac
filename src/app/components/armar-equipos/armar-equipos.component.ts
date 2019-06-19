import { Component, OnInit } from '@angular/core';
import { EquipoI } from 'src/app/models/equipo';
import { EquiposService } from 'src/app/services/equipos.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-armar-equipos',
  templateUrl: './armar-equipos.component.html',
  styles: []
})
export class ArmarEquiposComponent implements OnInit {
  tabla: EquipoI[];

  constructor(private dataService: EquiposService,
              private msgService: MensajesService) {

  }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: EquipoI[]) => {
        this.tabla = data;
      }
    );
  }

  modificar() {
    this.msgService.sendMessage('No puede modificar equipos, eliminelo y creelo nuevamente', 'alert-danger');

  }
}
