import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor() { }

  mensaje(titulo: string = '', mensaje: string, tipo: string = '') {
    swal(titulo, mensaje, tipo);
  }

  ok(mensaje: string, titulo: string = '') {
    swal(titulo, mensaje, 'success');
  }

  error(mensaje: string, titulo: string = '') {
    swal(titulo, mensaje, 'error');
  }
}
