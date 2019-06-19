import { Component, OnInit } from '@angular/core';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { InscripcionI } from 'src/app/models/inscripcion';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styles: []
})
export class FlatComponent implements OnInit {
  inscripciones: any[] = [];
  constructor(
        private dataService: InscripcionesService,
        ) { }

  ngOnInit() {
    this.dataService.getRecords$().subscribe(
      
    )
  }

  flatInscripciones2(inscripciones: InscripcionI[]) {
    const flat = inscripciones.reduce( (arr, elemento) => {
      elemento.distancia.forEach(
        distancia =>  {
          arr.push(this.generarObjetoInscripcion(elemento, distancia) );
        });
      return arr;
    }, [] );
    return flat;
  }

  generarObjetoInscripcion(data, distancia) {
    return { 
      categoria: data.categoria, 
      genero: data.genero, 
      distancia: distancia,
      palista: data.palista
    };
  }
  
}
