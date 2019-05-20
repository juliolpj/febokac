import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/models/user';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: ['']
})
export class UsuariosComponent implements OnInit {
  tabla: UserI[];

  constructor(private dataService: UsuariosService) {

  }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: UserI[]) => {
        this.tabla = data;
      }
    );
  }
}

