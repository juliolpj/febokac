import { ClubesService } from 'src/app/services/clubes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { generoValidator } from 'src/app/validators/genero-validator'

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MensajesService } from 'src/app/services/mensajes.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { CategoriaI } from 'src/app/models/categoria';
import { PalistasService } from 'src/app/services/palistas.service';
import { PalistaI } from 'src/app/models/palista';
import { UserI } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-f-palistas',
  templateUrl: './f-palistas.component.html',
  styles: ['']
})
export class FPalistasComponent implements OnInit {
  titulo = '';
  cardHeaderStyle = '';
  id = '';
  miForm: FormGroup;

  categorias: CategoriaI[];
  tblClubes: string[] = [];
  usuario: UserI;

  constructor(
    public dataService: PalistasService, 
    public fb: FormBuilder,      
    private msgService: MensajesService,
    private location: Location, 
    private actRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private categoriaService: CategoriasService,
    private clubesService: ClubesService) {
  }

  ngOnInit() {
    this.usuario = this.authService.getUser();
    this.categoriaService.getRecords$().subscribe( data => this.categorias = data );
    this.msgService.clearMessages();
    this.setTblClubes();
    this.buildForm();
    this.setState();
  }

  setTblClubes() {
    if (this.usuario.club && this.usuario.club != 'FeBoCaK') {
      this.tblClubes.push(this.usuario.club);
    } else { 
      this.clubesService.getRecords$().pipe(
        map(data => data.map(club => club.nombre))
        ).subscribe( 
          data => this.tblClubes = data,
          error =>this.msgService.sendMessage("Error al cargar la tabla de clubes: " + error.statusText,"alert-danger")
        );
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
    } 
  }

  buildForm() {
    this.miForm = this.fb.group({
      dni: ['', [Validators.required, Validators.minLength(3) ] ],
      apellido: ['', [Validators.required, Validators.minLength(2)] ],
      nombre: ['', [Validators.required, Validators.minLength(2)] ],
      fnacimiento: ['', [Validators.required] ],
      genero: ['', [Validators.required, generoValidator] ],
      categoria: ['', [Validators.required] ],
      club: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.miForm.controls.club.setValue(this.usuario.club);
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

  get dni() {
    return this.miForm.get('dni');
  }
  get apellido() {
    return this.miForm.get('apellido');
  }
  get nombre() {
    return this.miForm.get('nombre');
  }
  get fnacimiento() {
    return this.miForm.get('fnacimiento');
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
      () => this.router.navigate(['palistas'])
    );
  }

  aceptarEditar() {
    this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['nombre'].value + ' Actualizado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['palistas'])
    );
  }

  aceptarEliminar() {
    this.dataService.deleteRecord$(this.id).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['nombre'].value + ' Eliminado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['palistas'])
    );
  }

  goBack() {
    this.location.back();
  }

  buscarCategoria(fecha: string, genero: string) {
    
    const año = parseInt( fecha.substring(0,4));
    if (!año || año < 1900) {
      this.miForm.controls.categoria.setValue('No se encontró')
    } else {
      const categoria = this.categorias.find( el => año >= el.desde && año <= el.hasta && el.genero.includes(genero)).categoria
      this.miForm.controls.categoria.setValue(categoria);
    }
  }
}
