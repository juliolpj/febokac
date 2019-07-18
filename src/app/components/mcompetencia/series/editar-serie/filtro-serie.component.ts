import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CategoriaI } from 'src/app/models/categoria';
import { DistanciaI } from 'src/app/models/distancia';
import { CategoriasService } from 'src/app/services/categorias.service';
import { DistanciasService } from 'src/app/services/distancias.service';

@Component({
  selector: 'app-filtro-serie',
  templateUrl: './filtro-serie.component.html',
  styles: []
})
export class FiltroSerieComponent implements OnInit {
  tblCategorias: CategoriaI[];
  tblDistancias: DistanciaI[];
  @Output() emitFiltrar = new EventEmitter<{genero: string, categoria: string, distancia: string }>();
  @Output() emitLimpiar = new EventEmitter();
  @Output() emitGuardar = new EventEmitter();
  @Output() emitSalir = new EventEmitter();

  miForm: FormGroup;

  constructor(private fb: FormBuilder,
    private categoriasService: CategoriasService,
    private distanciasService: DistanciasService) {

}

  ngOnInit() {
    this.categoriasService.getRecords$().subscribe( data => this.tblCategorias = data );
    this.distanciasService.getRecords$().subscribe( data => this.tblDistancias = data );

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

  guardar() {
    this.emitGuardar.emit();
    //this.emitFiltrar.emit(this.miForm.value);
  }

  limpiar(){
    this.miForm.controls.genero.setValue('');
    this.miForm.controls.categoria.setValue('');
    this.miForm.controls.distancia.setValue('');
    this.emitLimpiar.emit();
  }

  onSubmit() {
    this.emitFiltrar.emit(
      {
        genero: this.genero.value,
        categoria: this.categoria.value,
        distancia: this.distancia.value
      }
    );
  }

  salir() {
    this.emitSalir.emit();
    //this.emitFiltrar.emit(this.miForm.value);
  }
}
