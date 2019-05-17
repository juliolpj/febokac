import { Component, OnInit } from '@angular/core';
import { EmpleadoI } from 'src/app/pruebas/empleados/empleados.interface';
import { EmpleadosService } from 'src/app/pruebas/empleados/services/empleados.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { SwitcherService } from 'src/app/pruebas/empleados/services/switcher.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: ['']
})
export class EmpleadosComponent implements OnInit {
  tabla: EmpleadoI[];
  tipoDeAlmacenamiento: string;

  constructor(
    private dataService: EmpleadosService, 
    private msgService: MensajesService,
    private switcher: SwitcherService) {

  }

  ngOnInit() {
    this.tipoDeAlmacenamiento = this.switcher.getAlmacenamiento();
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: EmpleadoI[]) => {
        this.tabla = data;
      }
    );
  }

  pruebaSetData() {
    this.dataService.pruebaSetLocalData('empleados', this.tabla);
    this.msgService.sendMessage('Datos guardados en local');
  }

  pruebaGetData() {
    const tblEmpleados = this.dataService.pruebaGetLocalData('empleados');
    if (tblEmpleados) {
      console.log(tblEmpleados);
    } else {
      console.log('No hay empleados guardados localmente');
    }
  }

  switchToLocalDB() {
    this.switcher.setAlmacenamiento({tipo: 'LocalStorage'});
    this.msgService.sendMessage('Almacenamiento actual LocalStorage', 'alert-primary')
  }
  
  switchToFirebase() {
    this.switcher.setAlmacenamiento({tipo: 'Firebase'});
    this.msgService.sendMessage('Almacenamiento actual Firebase', 'alert-success')
  }
}
