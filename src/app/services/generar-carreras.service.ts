import { Injectable } from '@angular/core';
import { InscripcionI } from '../models/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class GenerarCarrerasService {

  constructor() { }

  flatInscripciones(inscripciones: InscripcionI[]) {
    const flat = [];
    for (let i = 0; i < inscripciones.length; i++) {
      for (let j = 0; j < inscripciones[i].distancia.length; j++) {
        const inscripcion = this.generarObjetoInscripcion(inscripciones[i], inscripciones[i].distancia[j]);
        flat.push(inscripcion);
      }
    }
    return flat;
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

  flatCarreras(inscripciones: InscripcionI[]) {
    const arr = [];
    for (let i = 0; i < inscripciones.length; i++) {
      for (let j = 0; j < inscripciones[i].distancia.length; j++) {
        const carrera = this.generarObjetoCarrera(inscripciones[i], inscripciones[i].distancia[j]);
        if ( ! !!arr.find( elemento => this.compararCarrera(elemento, carrera)) ) {
          arr.push(carrera);
        }
        
      }
    }
    console.log('flatInscripciones', arr)
    return arr;
  }

  compararCarrera(elemento, carrera) {
    return elemento.genero === carrera.genero &&
           elemento.categoria === carrera.categoria &&
           elemento.distancia === carrera.distancia;
  }

  generarObjetoCarrera(data, distancia) {
    return { 
      //id: contador.toString().padStart(4, '0'),
      categoria: data.categoria, 
      genero: data.genero, 
      distancia: distancia,
      cantidad: 0
    };
  }


}
