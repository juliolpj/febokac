import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { generoValidator } from 'src/app/validators/genero-validator'

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MensajesService } from 'src/app/services/mensajes.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { CategoriaI } from 'src/app/models/categoria';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-f-categorias',
  templateUrl: './f-categorias.component.html',
  styles: ['']
})
export class FCategoriasComponent implements OnInit {
  titulo = '';
  cardHeaderStyle = '';
  id = '';
  miForm: FormGroup;

  constructor(
    public dataService: CategoriasService, 
    public fb: FormBuilder,      
    private msgService: MensajesService,
    private spinner: SpinnerService,
    private location: Location, 
    private actRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.msgService.clearMessages();
    this.buildForm();
    this.setState();
  }

  setState() {
    const objTitulo = {add:'Agregar', edit: 'Modificar', delete: 'Eliminar'};
    this.titulo = objTitulo[this.actRoute.snapshot.url[1].path];
    
    const objStyle = {add:'bg-primary', edit: 'bg-warning', delete: 'bg-danger'}
    this.cardHeaderStyle = objStyle[this.actRoute.snapshot.url[1].path];

    this.id = this.actRoute.snapshot.paramMap.get('id');
    if (this.titulo !== 'Agregar') {
      this.setFormData();
    } 
  }

  buildForm() {
    this.miForm = this.fb.group({
      desde: ['', [Validators.required, Validators.min(1900), Validators.max(2020)] ],
      hasta: ['', [Validators.required, Validators.min(1900), Validators.max(2020)] ],
      genero: ['', [Validators.required, generoValidator] ],
      categoria: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  setFormData() {
    this.dataService.getRecord$(this.id).subscribe(
      data => {
        this.miForm.patchValue(data);
      }
    );
    if (this.titulo==='Eliminar') {
      this.miForm.controls.genero.disable();
    }
  }

  get desde() {
    return this.miForm.get('desde');
  }
  get hasta() {
    return this.miForm.get('hasta');
  }
  get genero() {
    return this.miForm.get('genero');
  }
  get categoria() {
    return this.miForm.get('categoria');
  }

  onSubmit() {
    this.spinner.on();
    switch (this.titulo) {
      case 'Agregar':
        this.aceptarAgregar();
        break;
      case 'Modificar':
        this.aceptarEditar();
        break;
      case 'Eliminar':
        this.aceptarEliminar();
        break;
    }
  }
  
  aceptarAgregar() {
    this.dataService.addRecord$(this.miForm.value).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['categoria'].value + ' Agregado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'),
      () => this.retornar()
    );
  }

  aceptarEditar() {
    this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['categoria'].value + ' Actualizado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'),
      () => this.retornar()
    );
  }

  aceptarEliminar() {
    this.dataService.deleteRecord$(this.id).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['categoria'].value + ' Eliminado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'),
      () => this.retornar()
    );
  }

  retornar() {
    this.spinner.off();
    this.router.navigate(['categorias']);
  }

  goBack() {
    this.location.back();
  }
}

