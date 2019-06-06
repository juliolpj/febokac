import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MensajesService } from 'src/app/services/mensajes.service';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { PalistasService } from 'src/app/services/palistas.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ClubesService } from 'src/app/services/clubes.service';
import { PalistaI } from 'src/app/models/palista';
import { CategoriaI } from 'src/app/models/categoria';
import { ClubI } from 'src/app/models/club';
import { UserI } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

import { map, tap } from 'rxjs/operators';
import { DistanciaI } from 'src/app/models/distancia';
import { DistanciasService } from 'src/app/services/distancias.service';
import { InscripcionI } from 'src/app/models/inscripcion';

@Component({
  selector: 'app-f-inscripciones',
  templateUrl: './f-inscripciones.component.html',
  styles: ['']
})
export class FInscripcionesComponent implements OnInit {
  @ViewChild('selectDistancia') selectDistancia: ElementRef;

  titulo = '';
  cardHeaderStyle = '';
  id = '';
  miForm: FormGroup;

  categorias: CategoriaI[];
  tblPalistas: PalistaI[] = [];
  tblClubes: ClubI[];
  tblDistancias: DistanciaI[];
  tblInscripciones: InscripcionI[];
  usuario: UserI;

  constructor(
    public dataService: InscripcionesService, 
    private palistasService: PalistasService,
    private categoriaService: CategoriasService,
    private clubesService: ClubesService,
    private distanciasService: DistanciasService,
    private authService: AuthService,
    private msgService: MensajesService,
    private location: Location, 
    private router: Router,
    private actRoute: ActivatedRoute,
    public fb: FormBuilder ) {
  }

  ngOnInit() {
    this.usuario = this.authService.getUser();
    this.dataService.getRecords$(this.usuario.club).subscribe( data => this.tblInscripciones = data);
    this.palistasService.getRecords$(this.usuario.club).subscribe( data => this.tblPalistas = data);
    this.categoriaService.getRecords$().subscribe( data => this.categorias = data );
    this.clubesService.getRecords$().subscribe(data => this.tblClubes = data);
    this.distanciasService.getRecords$().subscribe(data => this.tblDistancias = data);
    this.msgService.clearMessages();
    this.buildForm();
    this.setState();
  }

  selectPalista(valor) {
    const palista = this.tblPalistas.find( element => element.palista === valor);
    if (this.titulo === 'Agregar' && !!this.tblInscripciones.find( element => element.dni === palista.dni)) {
      this.miForm.controls.palista.setValue('');
      this.msgService.sendMessage(palista.palista + ' Ya está inscrito. Si lo desea modifique su inscripción');
    } else {
      this.miForm.patchValue(palista);
    }

  }

  setState() {
    const objTitulo = {add:'Agregar', edit: 'Modificar', delete: 'Eliminar'};
    this.titulo = objTitulo[this.actRoute.snapshot.url[1].path];
    
    const objStyle = {add:'bg-primary', edit: 'bg-warning', delete: 'bg-danger'}
    this.cardHeaderStyle = objStyle[this.actRoute.snapshot.url[1].path];

    this.id = this.actRoute.snapshot.paramMap.get('id');
    if (this.titulo !== 'Agregar') {
      this.setFormData();
      this.miForm.controls.palista.disable();
    } 
  }

  buildForm() {
    this.miForm = this.fb.group({
      palista: ['', [Validators.required, Validators.minLength(3)]],
      dni: [''],
      apellido: [''],
      nombre: [''],
      fnacimiento: [''],
      genero: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      club: ['', [Validators.required]],
      distancia: [[], [Validators.required]]

    });
    if (this.usuario.club != 'FeBoCaK') {
      this.miForm.controls.club.disable();
    }
  }

  marcarDistancias(arrayDistancias){
    const options = this.selectDistancia.nativeElement.options;
    for ( let i = 0, len = options.length, option; i < len; i++ ) {
      option = options[i];
      if ( arrayDistancias.indexOf( option.text ) != -1 ) {
        option.selected = true;
      }
    }
  }

  setFormData() {
    this.dataService.getRecord$(this.id).subscribe(
      data => {
        this.miForm.patchValue(data);
        this.marcarDistancias(data.distancia);
      }
    );

    if (this.titulo==='Eliminar') {
      this.miForm.controls.palista.disable();
      this.miForm.controls.club.disable();
    }
  }

  get palista() {
    return this.miForm.get('palista');
  }
  get genero() {
    return this.miForm.get('genero');
  }
  get categoria() {
    return this.miForm.get('categoria');
  }
  get club() {
    return this.miForm.get('club');
  } 
  get distancia() {
    return this.miForm.get('distancia');
  }

  onSubmit() {
    this.miForm.controls.club.enable();
    this.miForm.controls.palista.enable();
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
      data => this.msgService.sendMessage(this.miForm.controls['palista'].value + ' Agregado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['inscripciones'])
    );
  }

  aceptarEditar() {
    this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['palista'].value + ' Actualizado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['inscripciones'])
    );
  }

  aceptarEliminar() {
    this.dataService.deleteRecord$(this.id).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['palista'].value + ' Eliminado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['inscripciones'])
    );
  }

  goBack() {
    this.location.back();
  }

}

