import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MensajesService } from 'src/app/services/mensajes.service';
import { DistanciasService } from 'src/app/services/distancias.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { DistanciaI } from 'src/app/models/distancia';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-f-distancias',
  templateUrl: './f-distancias.component.html',
  styles: ['']
})
export class FDistanciasComponent implements OnInit {
  titulo = '';
  cardHeaderStyle = '';
  id = '';
  miForm: FormGroup;

  tblCategorias: string[];

  constructor(
    public dataService: DistanciasService, 
    private categoriasService: CategoriasService,
    public fb: FormBuilder,      
    private msgService: MensajesService,
    private location: Location, 
    private actRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.msgService.clearMessages();
    this.setTblClubes();
    this.buildForm();
    this.setState();
  }

  setTblClubes() {
    this.categoriasService.getRecords$().pipe(
      map(data => data.map(categoria => categoria.categoria))).subscribe( 
        data => this.tblCategorias = data,
        error =>this.msgService.sendMessage("Error al cargar la tabla de categorias: " + error.statusText, "alert-danger")
    );
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
      categoria: ['', [Validators.required] ],
      bote: ['', [Validators.required] ],
      distancia: ['', [Validators.required] ]
    });
  }

  setFormData() {
    this.dataService.getRecord$(this.id).subscribe(
      data => {
        this.miForm.patchValue(data);
      }
    );
    if (this.titulo==='Eliminar') {
      this.miForm.controls.categoria.disable();
      this.miForm.controls.bote.disable();
    }
  }

  get categoria() {
    return this.miForm.get('categoria');
  }
  get bote() {
    return this.miForm.get('bote');
  }
  get distancia() {
    return this.miForm.get('distancia');
  }

  onSubmit() {
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
      data => this.msgService.sendMessage(this.miForm.controls['distancia'].value + ' Agregado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['distancias'])
    );
  }

  aceptarEditar() {
    this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['distancia'].value + ' Actualizado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['distancias'])
    );
  }

  aceptarEliminar() {
    this.dataService.deleteRecord$(this.id).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['distancia'].value + ' Eliminado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['distancias'])
    );
  }

  goBack() {
    this.location.back();
  }
}

