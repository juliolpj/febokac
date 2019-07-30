import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuntuacionService {
  puntuaciones = [
    {
      categorias: ['Pre infantiles', 'Infantiles', 'Menores A', 'Menores B'],
      puntos: [16, 13, 10, 8, 6, 4, 3, 2],
      default: 1
    },
    {
      categorias: ['Cadetes', 'Juniors', 'Seniors', 'Masters'],
      puntos: [15, 12, 9, 7, 5, 3, 1],
      default: 0
    },

  ];
  constructor() { }

  getPuntuacion(categoria: string, posicion: number) {
    categoria = categoria.includes('Masters') ? 'Masters' : categoria;
    let puntuacion = this.puntuaciones.find(elemento => elemento.categorias.includes(categoria) );
    let puntos = puntuacion.puntos[posicion - 1] || puntuacion.default;
    return puntos;
  }
}
