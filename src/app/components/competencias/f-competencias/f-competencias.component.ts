import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MensajesService } from 'src/app/services/mensajes.service';
import { CompetenciasService } from 'src/app/services/competencias.service';
import { CompetenciaI } from 'src/app/models/competencia';
import { ClubesService } from 'src/app/services/clubes.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-f-competencias',
  templateUrl: './f-competencias.component.html',
  styles: ['']
})
export class FCompetenciasComponent implements OnInit {
  titulo = '';
  cardHeaderStyle = '';
  id = '';
  miForm: FormGroup;

  tblClubes: string[];

  constructor(
    public dataService: CompetenciasService, 
    private clubesService: ClubesService,
    public fb: FormBuilder,      
    private msgService: MensajesService,
    private location: Location, 
    private actRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.msgService.clearMessages();
    this.setClubes();
    this.buildForm();
    this.setState();
  }

  setClubes() {
    this.clubesService.getRecords$().pipe(
      map(data => data.map(club => club.nombre))
      ).subscribe( 
        data => this.tblClubes = data,
        error =>this.msgService.sendMessage("Error al cargar la tabla de clubes: " + error.statusText,"alert-danger")
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
      desde: ['', [Validators.required] ],
      hasta: ['', [Validators.required] ],
      competencia: ['', [Validators.required, Validators.minLength(3)] ],
      club: ['', [Validators.required]]
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
  get competencia() {
    return this.miForm.get('competencia');
  }
  get club() {
    return this.miForm.get('club');
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
      data => this.msgService.sendMessage(this.miForm.controls['competencia'].value + ' Agregado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['competencias'])
    );
  }

  aceptarEditar() {
    this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['competencia'].value + ' Actualizado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['competencias'])
    );
  }

  aceptarEliminar() {
    this.dataService.deleteRecord$(this.id).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['competencia'].value + ' Eliminado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['competencias'])
    );
  }

  goBack() {
    this.location.back();
  }
}

