import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {}

  showDate(strFecha: string) {
    const fecha = new Date(strFecha + 'T00:00:00');
 
    const dia = fecha.getDate().toString().padStart(2, '0')
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
     
    return  dia + '/' + mes + '/' + fecha.getFullYear();
  }

}
