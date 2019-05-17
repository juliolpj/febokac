import { Component, OnInit } from '@angular/core';
import { PalistaI } from 'src/app/models/palista';
import { PalistasService } from 'src/app/services/palistas.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-palistas',
  templateUrl: './palistas.component.html',
  styles: ['']
})
export class PalistasComponent implements OnInit {
  tabla: PalistaI[];

  constructor(private dataService: PalistasService, public utilService: UtilService) {

  }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: PalistaI[]) => {
        this.tabla = data;
      }
    );
  }
}
