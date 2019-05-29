import { Component, OnInit } from '@angular/core';
import { PalistaI } from 'src/app/models/palista';
import { UserI } from 'src/app/models/user';
import { PalistasService } from 'src/app/services/palistas.service';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-palistas',
  templateUrl: './palistas.component.html',
  styles: ['']
})
export class PalistasComponent implements OnInit {
  tabla: PalistaI[];
  usuario: UserI;

  constructor(private dataService: PalistasService, 
              public utilService: UtilService,
              private authService: AuthService) {

  }

  ngOnInit() {
    this.usuario = this.authService.getUser();
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecords$(this.usuario.club).subscribe(
      (data: PalistaI[]) => {
        this.tabla = data;
      }
    );
  }
}
