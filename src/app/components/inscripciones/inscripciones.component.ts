import { Component, OnInit } from '@angular/core';
import { PalistaI } from 'src/app/models/palista';
import { InscripcionI } from 'src/app/models/inscripcion';
import { PalistasService } from 'src/app/services/palistas.service';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {
  frmStatus = 'Consultar';
  tblOrden = {dni: 0, nombre: 0, fnacimiento:0};
  registro: InscripcionI = {};
  inscripciones: Array<InscripcionI>;
  palistas: Array<PalistaI>;

  constructor( private dataService: InscripcionesService, 
               private palistaService: PalistasService,
               private msgService: MensajesService,
               public utilService: UtilService,
               public authService: AuthService) { }

  ngOnInit() {
    this.getRecords();
    this.getPalistas();
  }

  getRecords() {
    this.dataService.getInscripciones$().subscribe(
      (data: InscripcionI[]) => {
        this.frmStatus = 'Consultar'
        this.inscripciones = data;
        this.registro = {};
      }
    );
  }

  getPalistas() {
    this.palistaService.getPalistas$().subscribe(
     ( data: PalistaI[]) => {
       this.palistas = data;
     }
    )
  }

  agregar() {
    this.registro = {};
    
    this.msgService.clearMessages();
    this.frmStatus = 'Agregar';
  }

  modificar(inscripcion: InscripcionI) {
    this.registro = Object.assign({}, inscripcion);
    this.msgService.clearMessages();
    this.frmStatus = 'Modificar'; 
  }
  
  eliminar(inscripcion: InscripcionI) {
    this.registro = Object.assign({}, inscripcion);
    this.msgService.clearMessages();
    this.frmStatus = 'Eliminar';
  }

  recibirCancelar(mensaje: string) {
    this.registro = {};
    this.frmStatus = mensaje;
  }

  recibirAceptar(inscripcion: InscripcionI) {
    switch (this.frmStatus) {
      case 'Agregar':
        this.aceptarAgregarRegistro(inscripcion);
        break;
      case 'Modificar':
        this.aceptarModificarRegistro(inscripcion);
        break;
      case 'Eliminar':
        this.aceptarEliminarRegistro(inscripcion);
      break;
    }
  }

  aceptarAgregarRegistro(inscripcion: InscripcionI) {
    this.dataService.addRecord$(inscripcion).subscribe(
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

  aceptarModificarRegistro(inscripcion: InscripcionI) {
    this.dataService.updateRecord$(inscripcion).subscribe(
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

  aceptarEliminarRegistro(inscripcion: InscripcionI) {
    this.dataService.deleteRecord$(inscripcion.id).subscribe(
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
      this.inscripciones.sort( 
        (a, b) => a[propiedad] < b[propiedad] ? 1 : b[propiedad] < a[propiedad] ? -1 : 0 );
    } else {
      orden = 1;
      this.inscripciones.sort( 
        (a, b) => a[propiedad] > b[propiedad] ? 1 : b[propiedad] > a[propiedad] ? -1 : 0 );
    }

    for (const prop in this.tblOrden) {
      this.tblOrden[prop] = 0;
    }
    this.tblOrden[propiedad] = orden;

  }
  
}
