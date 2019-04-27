import { Component, OnInit } from '@angular/core';
import { PalistaI } from 'src/app/models/palista';
import { PalistasService } from 'src/app/services/palistas.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-palistas',
  templateUrl: './palistas.component.html',
  styleUrls: ['./palistas.component.css']
})
export class PalistasComponent implements OnInit {
  frmStatus = 'Consultar';
  registro: PalistaI = {};
  palistas: Array<PalistaI>;

  constructor( private dataService: PalistasService, 
               private msgService: MensajesService,
               public utilService: UtilService,
               public authService: AuthService) { }

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
    this.registro.club = this.authService.user.club;
    
    this.msgService.clearMessages();
    this.frmStatus = 'Agregar';
  }

  modificar(palista: PalistaI) {
    this.registro = Object.assign({}, palista);
    this.msgService.clearMessages();
    this.frmStatus = 'Modificar'; 
  }
  
  eliminar(palista: PalistaI) {
    this.registro = Object.assign({}, palista);
    this.msgService.clearMessages();
    this.frmStatus = 'Eliminar';
  }

  recibirCancelar(mensaje: string) {
    this.registro = {};
    this.frmStatus = mensaje;
  }

  recibirAceptar(palista: PalistaI) {
    console.log('Recibir aceptar', palista);
    
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
        this.msgService.sendMessage('Registro agregado satisfactoriamente');
        this.getRecords();
      },
      error => {
        this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger');
        console.log(error);
      },
      () => this.frmStatus = 'Consultar'
    )
  }

  aceptarModificarRegistro(palista: PalistaI) {
    this.dataService.updateRecord$(palista).subscribe(
      data => {
        this.msgService.sendMessage('Registro actualizado satisfactoriamente');
        this.getRecords();
      },
      error => {
        this.msgService.sendMessage('Error al actualizar los registro: ' + error.statusText, 'alert-danger');
        console.log(error);
      },
      () => this.frmStatus = 'Consultar'
    )
  }

  aceptarEliminarRegistro(palista: PalistaI) {
    this.dataService.deleteRecord$(palista.id).subscribe(
      () => {
        this.msgService.sendMessage('Registro eliminado satisfactoriamente');
        this.getRecords();
      },
      error => this.msgService.sendMessage('Error al eliminar el registro: ' + error.statusText, 'alert-danger'),
      () => this.frmStatus = 'Consultar'
    )
  }
}
