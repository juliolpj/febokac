import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PalistaI } from 'src/app/models/palista';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() frmStatus: string;
  @Input() registro: PalistaI;
  @Output() botonAceptar = new EventEmitter<PalistaI>();
  @Output() botonCancelar = new EventEmitter<string>();

  categorias = [
    { desde: 1900, hasta: 1959, genero: "Masculino", categoria: "Cab Masters F" },
    { desde: 1960, hasta: 1964, genero: "Masculino", categoria: "Cab Masters E" },
    { desde: 1965, hasta: 1969, genero: "Masculino", categoria: "Cab Masters D" },
    { desde: 1970, hasta: 1974, genero: "Masculino", categoria: "Cab Masters C" },
    { desde: 1975, hasta: 1979, genero: "Masculino", categoria: "Cab Masters B" },
    { desde: 1980, hasta: 1984, genero: "Masculino", categoria: "Cab Masters A" },
    { desde: 1900, hasta: 1964, genero: "Femenino", categoria: "Dam Masters C" },
    { desde: 1965, hasta: 1974, genero: "Femenino", categoria: "Dam Masters B" },
    { desde: 1975, hasta: 1984, genero: "Femenino", categoria: "Dam Masters A" },
    { desde: 1985, hasta: 2000, genero: "Femenino y Masculino", categoria: "Seniors" },
    { desde: 2001, hasta: 2002, genero: "Femenino y Masculino", categoria: "Juniors" },
    { desde: 2003, hasta: 2004, genero: "Femenino y Masculino", categoria: "Cadetes" },
    { desde: 2005, hasta: 2005, genero: "Femenino y Masculino", categoria: "Menores B" },
    { desde: 2006, hasta: 2006, genero: "Femenino y Masculino", categoria: "Menores A" },
    { desde: 2007, hasta: 2008, genero: "Femenino y Masculino", categoria: "Infantiles" },
    { desde: 2009, hasta: 20019, genero: "Femenino y Masculino", categoria: "Pre infantiles" }
  ];
  
  constructor() {
  }

  ngOnInit() {
  }

  aceptar(miForm: NgForm) {
    this.botonAceptar.emit(this.registro);
    miForm.resetForm();
  }

  cancelar(miForm: NgForm) {
    this.botonCancelar.emit('Consultar');
    miForm.resetForm();
  }

  buscarCategoria(fecha: string, genero: string) {
    const año = parseInt( fecha.substring(0,4));
    if (año > 1900) {
      this.registro.categoria = this.categorias.find( el => año >= el.desde && año <= el.hasta && el.genero.includes(genero)).categoria;
    } else {
      this.registro.categoria = 'No se encontró';
    }
    
  }
}
