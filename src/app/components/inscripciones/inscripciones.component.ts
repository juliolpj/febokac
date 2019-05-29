import { Component, OnInit } from '@angular/core';
import { InscripcionI } from 'src/app/models/inscripcion';
import { UserI } from 'src/app/models/user';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/services/auth.service';

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
              private authService: AuthService) {

  }

  ngOnInit() {
    this.usuario = this.authService.getUser();
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
