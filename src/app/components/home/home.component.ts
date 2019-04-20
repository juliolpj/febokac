import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  proximoEncuentro = {
    fecha: '4 y 5 de Mayo',
    club: 'Club Atlético Estudiantes de Olavarría',
    descripcion: '3º Fecha de Maratóns'
  }
  constructor() { }

  ngOnInit() {
  }

}
