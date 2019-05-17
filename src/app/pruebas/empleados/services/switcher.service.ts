import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitcherService {
  public almacenamiento: string;

  constructor() { }

  setAlmacenamiento(tipo: object) {
    console.log('setAlmacenamiento');
    
    localStorage.setItem('almacenamiento', JSON.stringify(tipo));
  }
  
  getAlmacenamiento() {
    console.log('getAlmacenamiento');
    const almacenamiento = JSON.parse(localStorage.getItem('almacenamiento'));
    console.log(almacenamiento);
    
    this.almacenamiento = almacenamiento.tipo || 'Firebase';
    console.log(this.almacenamiento);
    
    return this.almacenamiento;
  }
}
