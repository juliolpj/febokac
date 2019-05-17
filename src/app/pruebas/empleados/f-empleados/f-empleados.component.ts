import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MensajesService } from 'src/app/services/mensajes.service';
import { EmpleadosService } from 'src/app/pruebas/empleados/services/empleados.service';
import { EmpleadoI } from 'src/app/pruebas/empleados/empleados.interface';

@Component({
  selector: 'app-f-empleados',
  templateUrl: './f-empleados.component.html',
  styles: ['']
})
export class FEmpleadosComponent implements OnInit {
  titulo = '';
  cardHeaderStyle = '';
  id = '';
  miForm: FormGroup;

  constructor(
    public dataService: EmpleadosService, 
    public fb: FormBuilder,      
    private msgService: MensajesService,
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
      nombre: ['', [Validators.required] ],
      apellido: ['', [Validators.required] ]
    });
  }

  setFormData() {
    this.dataService.getRecord$(this.id).subscribe(
      data => {
        this.miForm.patchValue(data);
      }
    );

  }

  get nombre() {
    return this.miForm.get('nombre');
  }
  get apellido() {
    return this.miForm.get('apellido');
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
      data => this.msgService.sendMessage(this.miForm.controls['nombre'].value + ' Agregado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['empleados'])
    );
  }

  aceptarEditar() {
    this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(
      data => {
        this.msgService.sendMessage(this.miForm.controls['nombre'].value + ' Actualizado satisfactoriamente')
      },
      error => this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['empleados'])
    );
  }

  aceptarEliminar() {
    this.dataService.deleteRecord$(this.id).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['nombre'].value + ' Eliminado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['empleados'])
    );
  }

  goBack() {
    this.location.back();
  }
}

