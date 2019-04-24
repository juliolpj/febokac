import { Component, OnInit } from '@angular/core';
import { PalistaI } from 'src/app/models/palista';
import { PalistasService } from 'src/app/services/palistas.service';

@Component({
  selector: 'app-palistas',
  templateUrl: './palistas.component.html',
  styleUrls: ['./palistas.component.css']
})
export class PalistasComponent implements OnInit {
  frmStatus = 'Consultar';
  registro: PalistaI = {};
  palistas: Array<PalistaI>;

  constructor( private dataService: PalistasService) { }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.dataService.getPalistas$().subscribe(
      (data: PalistaI[]) => {
        this.frmStatus = 'Consultar'
        this.palistas = data;
        this.registro = {};
      }
    );
  }

  agregar() {
    this.registro = {};
    this.frmStatus = 'Agregar';
  }

  modificar(palista: PalistaI) {
    this.registro = Object.assign({}, palista);
    this.frmStatus = 'Modificar'; 
  }
  
  eliminar(palista: PalistaI) {
    this.registro = Object.assign({}, palista);
    this.frmStatus = 'Eliminar';
  }

  recibirCancelar(mensaje: string) {
    this.registro = {};
    this.frmStatus = mensaje;
  }

  recibirAceptar(palista: PalistaI) {
    switch (this.frmStatus) {
      case 'Agregar':
        this.aceptarAgregarRegistro(palista);
        break;
      case 'Modificar':
        this.aceptarModificarRegistro(palista);
        break;
      case 'Eliminar':
        this.aceptarEliminarRegistro(palista);
      break;
    }
  }

  aceptarAgregarRegistro(palista: PalistaI) {
    this.dataService.addRecord$(palista).subscribe(
      data => {
        //this.msgService.sendMessage('Registro agregado satisfactoriamente');
        this.getRecords();
      },
      error => {
        //this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger');
        console.log(error);
      },
      () => this.frmStatus = 'Consultar'
    )
  }

  aceptarModificarRegistro(palista: PalistaI) {
    console.log('aceptarModificarRegistro', palista.id);
    
    this.dataService.updateRecord$(palista).subscribe(
      data => {
        //this.msgService.sendMessage('Registro actualizado satisfactoriamente');
        this.getRecords();
      },
      error => {//this.msgService.sendMessage('Error al actualizar los registro: ' + error.statusText, 'alert-danger')
      },
      () => this.frmStatus = 'Consultar'
    )
  }

  aceptarEliminarRegistro(palista: PalistaI) {

  }
}
