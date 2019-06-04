import { Component, OnInit } from '@angular/core';
import { InscripcionI } from 'src/app/models/inscripcion';
import { UserI } from 'src/app/models/user';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/services/auth.service';
import { ConsolaService } from 'src/app/services/consola.service';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styles: ['']
})
export class InscripcionesComponent implements OnInit {
  tabla: InscripcionI[];
  usuario: UserI;

  constructor(private dataService: InscripcionesService, 
              public utilService: UtilService,
              private authService: AuthService,
              private consolaService: ConsolaService,
              private router: Router,
              private msgService: MensajesService) {

  }

  ngOnInit() {
    this.usuario = this.authService.getUser();

    if (this.usuario.rol === 'Inscripciones') {
        this.consolaService.getRecord$('01').subscribe(
        data => {
          if (data.status !== 'Abrir inscripciones') {
            this.msgService.sendMessage('Las inscripciones no están abiertas', 'alert-warning');
            this.router.navigate(['home']);
          }
        }
      )
    }
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecords$(this.usuario.club).subscribe(
      (data: InscripcionI[]) => {
        this.tabla = data;
      }
    );
  }
}
