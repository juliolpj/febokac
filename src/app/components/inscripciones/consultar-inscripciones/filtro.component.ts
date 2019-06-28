import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { InscripcionI } from 'src/app/models/inscripcion';
import { ClubI } from 'src/app/models/club';
import { CategoriaI } from 'src/app/models/categoria';
import { DistanciaI } from 'src/app/models/distancia';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styles: []
})
export class FiltroComponent implements OnInit {
  @ViewChild('btClose') btClose: ElementRef;
  @Input() tblClubes: ClubI[];
  @Input() tblCategorias: CategoriaI[];
  @Input() tblDistancias: DistanciaI[];
  @Output() emitFiltrar = new EventEmitter<InscripcionI>();

  miForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.miForm = this.fb.group({
      genero: [''],
      categoria: [''],
      club: [''],
      distancia: ['']

    });
  }

  get genero() {
    return this.miForm.get('genero');
  }
  get categoria() {
    return this.miForm.get('categoria');
  }
  get distancia() {
    return this.miForm.get('distancia');
  }
  get club() {
    return this.miForm.get('club');
  }

  consultar() {
    this.emitFiltrar.emit(this.miForm.value);
    this.btClose.nativeElement.click();
  }

  cancelar(){
    this.btClose.nativeElement.click();
  }

  onSubmit() {
    this.btClose.nativeElement.click();
  }
}
