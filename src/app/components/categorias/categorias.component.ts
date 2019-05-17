import { Component, OnInit } from '@angular/core';
import { CategoriaI } from 'src/app/models/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: ['']
})
export class CategoriasComponent implements OnInit {
  tabla: CategoriaI[];

  constructor(private dataService: CategoriasService) {

  }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecords$().subscribe(
      (data: CategoriaI[]) => {
        this.tabla = data;
      }
    );
  }
}
