import { Injectable } from "@angular/core";
import { SeriesService } from 'src/app/services/series.service';

@Injectable({
  providedIn: "root"
})
export class CondicionesCarrerasService {
  condiciones = [
    {
      minimo: 10,
      maximo: 18,
      serie: {
        pasanDirectoAfinal: [1, 2, 3],
        pasanAsemiFinal: [4, 5, 6, 7],
        adicional: { posicion: [8], cantidad: [1] }
      },
      semis: {
        pasanAfinal: [1, 2, 3]
      }
    },
    {
      minimo: 19,
      maximo: 27,
      serie: {
        pasanDirectoAfinal: [1],
        pasanAsemiFinal: [2, 3, 4, 5, 6, 7],
        adicional: { posicion: [10], cantidad: [0] }
      },
      semis: {
        pasanAfinal: [1, 2, 3]
      }
    }
  ];

  constructor(private seriesService: SeriesService) {}

  getCondiciones(categoria: string, genero: string, distancia: string) {
    const cantidadDeAtletas = this.getCantidadGrupoSerie(categoria, genero, distancia);
    return this.condiciones.find(elemento => cantidadDeAtletas >= elemento.minimo && cantidadDeAtletas <= elemento.maximo);
  }

  getCantidadGrupoSerie(categoria: string, genero: string, distancia: string) {
    const grupoSerie = this.seriesService.getGrupoSerie(categoria, genero, distancia);
    
    return grupoSerie ? grupoSerie.total : 0;
  }
}
