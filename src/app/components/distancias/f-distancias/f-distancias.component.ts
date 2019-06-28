import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { DistanciasService } from 'src/app/services/distancias.service';
import { DistanciaI } from 'src/app/models/distancia';
import { map } from 'rxjs/operators';
import { MsgService } from 'src/app/services/msg.service';

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


  constructor(
    public dataService: DistanciasService, 
    public fb: FormBuilder,
    private msg: MsgService,      
    private location: Location, 
    private actRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
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
      embarcacion: ['', [Validators.required] ],
      metros: [0, [Validators.required] ],
      distancia: ['', [Validators.required] ]
    });
  }

  setFormData() {
    this.dataService.getRecord$(this.id).subscribe(
      data => {
        if (data !== undefined) {
          this.miForm.patchValue(data);
        } 
      }
    );
    if (this.titulo==='Eliminar') {
      this.miForm.controls.embarcacion.disable();
    }
  }

  get embarcacion() {
    return this.miForm.get('embarcacion');
  }
  get distancia() {
    return this.miForm.get('distancia');
  }
  get metros() {
    return this.miForm.get('metros');
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
      data => this.msg.ok(this.miForm.controls['distancia'].value + ' Agregado satisfactoriamente'),
      error => this.msg.error('Error al agregar los datos: ' + error.statusText),
      () => this.router.navigate(['distancias'])
    );
  }

  aceptarEditar() {
    this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(
      data => this.msg.ok(this.miForm.controls['distancia'].value + ' Actualizado satisfactoriamente'),
      error => this.msg.error('Error al actualizar los datos: ' + error.statusText),
      () => this.router.navigate(['distancias'])
    );
  }

  aceptarEliminar() {
    this.dataService.deleteRecord$(this.id).subscribe(
      data => this.msg.ok(this.miForm.controls['distancia'].value + ' Eliminado satisfactoriamente'),
      error => this.msg.error('Error al eliminar los datos: ' + error.statusText),
      () => this.router.navigate(['distancias'])
    );
  }

  goBack() {
    this.location.back();
  }
}

