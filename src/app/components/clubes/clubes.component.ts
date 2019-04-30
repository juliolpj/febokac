import { Component, OnInit } from '@angular/core';
import { ClubI } from 'src/app/models/club';
import { ClubesService } from 'src/app/services/clubes.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css']
})
export class ClubesComponent implements OnInit {
  frmStatus = 'Consultar';
  tblOrden = {dni: 0, nombre: 0, fnacimiento:0};
  registro: ClubI = {};
  clubes: Array<ClubI>;

  constructor( private dataService: ClubesService, 
               private msgService: MensajesService) { }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.dataService.getClubes$().subscribe(
      (data: ClubI[]) => {
        this.frmStatus = 'Consultar'
        this.clubes = data;
        this.registro = {};
      }
    );
  }

  agregar() {
    this.registro = {};
    
    this.msgService.clearMessages();
    this.frmStatus = 'Agregar';
  } 

  modificar(club: ClubI) {
    this.registro = Object.assign({}, club);
    this.msgService.clearMessages();
    this.frmStatus = 'Modificar'; 
  }
  
  eliminar(club: ClubI) {
    this.registro = Object.assign({}, club);
    this.msgService.clearMessages();
    this.frmStatus = 'Eliminar';
  }

  recibirCancelar(mensaje: string) {
    this.registro = {};
    this.frmStatus = mensaje;
  }

  recibirAceptar(club: ClubI) {
    console.log('Recibir aceptar', club);
    
    switch (this.frmStatus) {
      case 'Agregar':
        this.aceptarAgregarRegistro(club);
        break;
      case 'Modificar':
        this.aceptarModificarRegistro(club);
        break;
      case 'Eliminar':
        this.aceptarEliminarRegistro(club);
      break;
    }
  }

  aceptarAgregarRegistro(club: ClubI) {
    this.dataService.addRecord$(club).subscribe(
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

  aceptarModificarRegistro(club: ClubI) {
    this.dataService.updateRecord$(club).subscribe(
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

  aceptarEliminarRegistro(club: ClubI) {
    this.dataService.deleteRecord$(club.id).subscribe(
      () => {
        this.msgService.sendMessage('Registro eliminado satisfactoriamente');
        this.getRecords();
      },
      error => this.msgService.sendMessage('Error al eliminar el registro: ' + error.statusText, 'alert-danger'),
      () => this.frmStatus = 'Consultar'
    )
  }

  ordenar(propiedad) {
    let orden = 0;
    if (this.tblOrden[propiedad] === 1) {
      orden = 2;
      this.clubes.sort( 
        (a, b) => a[propiedad] < b[propiedad] ? 1 : b[propiedad] < a[propiedad] ? -1 : 0 );
    } else {
      orden = 1;
      this.clubes.sort( 
        (a, b) => a[propiedad] > b[propiedad] ? 1 : b[propiedad] > a[propiedad] ? -1 : 0 );
    }

    for (const prop in this.tblOrden) {
      this.tblOrden[prop] = 0;
    }
    this.tblOrden[propiedad] = orden;

  }
  
}

