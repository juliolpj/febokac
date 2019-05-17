import { Injectable } from '@angular/core';
import { EmpleadoI } from 'src/app/pruebas/empleados/empleados.interface';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  getRecordsLS$(): Observable<EmpleadoI[]> {
    return from( JSON.parse(localStorage.getItem('empleados') ));
  }
}
