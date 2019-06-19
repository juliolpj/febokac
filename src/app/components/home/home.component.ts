import { Component, OnInit } from '@angular/core';
import { ConsolaService } from 'src/app/services/consola.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  competencia: any = {}
  constructor(private consolaService: ConsolaService) { }

  ngOnInit() {
    this.consolaService.getRecord$('01').subscribe(
      data => {
        const desde = new Date(data.desde).toLocaleDateString();
        const hasta = new Date(data.hasta).toLocaleDateString();
        this.competencia.fecha = desde + ' hasta ' + hasta;
        this.competencia.club = data.club;
        this.competencia.descripcion = data.competencia;
        this.competencia.status = this.descripcionDelStatus(data.status);
      }
    )
  }

  descripcionDelStatus(status: string) {
    
    switch (status) {
      case 'Establecer próxima competencia':
        return 'Próxima competencia';
        break;
      case 'Abrir inscripciones':
        return 'Inscripciones abiertas';
        break;
      case 'Cerrar inscripciones':
        return 'Inscripciones cerradas';
        break;
      case 'Exportar datos':
        return 'Inscripciones cerradas - Datos exportados';
        break;
      case 'Abrir competencia':
        return 'En competencia';
        break;
      case 'Importar datos':
        return 'Resultados de la competencia cargados';
        break;
      case 'Cerrar competencia':
        return 'Competencia guardada en el histórico';
        break;
   
      default:
        break;
    }
  }

}
