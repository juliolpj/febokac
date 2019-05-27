import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ConsolaService } from 'src/app/services/consola.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { CompetenciaI } from 'src/app/models/competencia';
import { CompetenciasService } from 'src/app/services/competencias.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-consola',
  templateUrl: './consola.component.html',
  styles: []
})
export class ConsolaComponent implements OnInit {

  tblCompetencias: CompetenciaI[];
  registro: CompetenciaI;
  nivelStatus = 0;

  constructor(private dataService: ConsolaService, 
              private msgService: MensajesService,
              private router: Router,
              private competenciasService: CompetenciasService,
              private utilService: UtilService) { }

  ngOnInit() {
    this.getRecords();
    this.competenciasService.getRecords$().subscribe(
      data => this.tblCompetencias = data
    );
  }

  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: CompetenciaI[]) => {
        if (data) {
          this.registro = data[0];
          this.setState();
        }
      }
    );
  }

  setState() {
    
    switch (this.registro.status) {
      case 'Establecer próxima competencia':
        this.nivelStatus = 1;
        break;
      case 'Abrir inscripciones':
        this.nivelStatus = 2;
        break;
      case 'Cerrar inscripciones':
        this.nivelStatus = 3;
        break;
      case 'Exportar datos':
        this.nivelStatus = 4;
        break;
      case 'Abrir competencia':
        this.nivelStatus = 5;
        break;
      case 'Importar datos':
        this.nivelStatus = 6;
        break;
      case 'Cerrar competencia':
        this.nivelStatus = 7;
        break;
   
      default:
        break;
    }
  }

  seleccionarCompetencia(registro: CompetenciaI){
    if (registro) {
      this.establecerProximaCompetencia(registro);
    }
  }

  establecerProximaCompetencia(registro: CompetenciaI) {
    if (this.nivelStatus !== 0) {
      this.msgService.sendMessage('Este proceso ya se realizó');
      return 
    }
    this.registro = registro;
    this.registro.status = 'Establecer próxima competencia';
    this.registro.id = this.utilService.generarID();

    this.dataService.updateRecord$('01', this.registro).subscribe(
      data => {
        this.msgService.sendMessage('Competencia establecida satisfactoriamente');
        this.nivelStatus = 1;
      },
      error => this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'),
      () => console.log("this.router.navigate(['home'])")
    );
  }

  abrirInscirpciones() {
    if (this.nivelStatus > 1) {
      this.msgService.sendMessage('Este proceso ya se realizó');
      return 
    }
    if (this.nivelStatus < 1) {
      this.msgService.sendMessage('Primero debe establecer la competencia');
      return 
    }
    this.registro.status = 'Abrir inscripciones';
    
    this.dataService.updateRecord$('01', this.registro).subscribe(
      data => {
        this.msgService.sendMessage('Inscripciones abiertas satisfactoriamente');
        this.nivelStatus = 2;
      },
      error => this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'),
      () => console.log("this.router.navigate(['home'])")
    );
  }

  cerrarInscirpciones() {
    if (this.nivelStatus > 2) {
      this.msgService.sendMessage('Este proceso ya se realizó');
      return 
    }
    if (this.nivelStatus < 2) {
      this.msgService.sendMessage('Primero debe abrir inscripciones');
      return 
    }

    this.registro.status = 'Cerrar inscripciones';
    this.dataService.updateRecord$('01', this.registro).subscribe(
      data => {
        this.msgService.sendMessage('Inscripciones cerradas satisfactoriamente');
        this.nivelStatus = 3;
      },
      error => this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'),
      () => console.log("this.router.navigate(['home'])")
    );
  }

  exportarDatos() {
    /* if (this.nivelStatus > 3) {
      this.msgService.sendMessage('Este proceso ya se realizó');
      return 
    } */
    if (this.nivelStatus < 3) {
      this.msgService.sendMessage('Primero debe cerrar inscripciones');
      return 
    }
    this.registro.status = 'Exportar datos';
    this.nivelStatus=4;

    this.guardarStatus('Datos exportados satisfactoriamente');
  }

  abrirCompetencia() {
    if (this.nivelStatus > 4) {
      this.msgService.sendMessage('Este proceso ya se realizó');
      return 
    }
    if (this.nivelStatus < 4) {
      this.msgService.sendMessage('Primero debe exportar los datos');
      return 
    }
    this.registro.status = 'Abrir competencia';
    this.nivelStatus=5;

    this.guardarStatus('Competencia abierta satisfactoriamente');
  }

  importarDatos() {
    if (this.nivelStatus > 5) {
      this.msgService.sendMessage('Este proceso ya se realizó');
      return 
    }
    if (this.nivelStatus < 5) {
      this.msgService.sendMessage('Primero debe abrir la competencia');
      return 
    }
    this.registro.status = 'Importar datos';
    this.nivelStatus++;

    this.guardarStatus('Datos importados satisfactoriamente');
  }

  cerrarCompetecia() {
    if (this.nivelStatus > 6) {
      this.msgService.sendMessage('Este proceso ya se realizó');
      return 
    }
    if (this.nivelStatus < 6) {
      this.msgService.sendMessage('Primero debe importar los datos');
      return 
    }
    this.registro.status = 'Receso';
    this.nivelStatus++;

    this.guardarStatus('Competencia cerrada satisfactoriamente');
  }

  guardarStatus(mensaje: string) {
    this.dataService.updateRecord$(this.registro.id, this.registro).subscribe(
      data => this.msgService.sendMessage(mensaje),
      error => this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'),
      () => console.log("this.router.navigate(['home'])")
    );
  }

  crearRegistroInicial() {
    const registro = {
      id: '8YuZxRujXXu8F9xgFyuV',
      competencia: '4 y 5 de Mayo',
      desde: '2019-05-04',
      hasta: '2019-05-05',
      club: 'Club agregado offline',
      status: 'Inscripciones abiertas'
    };

    this.dataService.addRecord$(registro).subscribe(
      data => this.msgService.sendMessage(' Agregado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'),
      () => console.log('xxx')
    );
  }

}
