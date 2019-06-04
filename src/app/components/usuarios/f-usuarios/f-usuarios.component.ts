import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MensajesService } from 'src/app/services/mensajes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ClubesService } from 'src/app/services/clubes.service';
import { UserI } from 'src/app/models/user';
import { ClubI } from 'src/app/models/club';

@Component({
  selector: 'app-f-usuarios',
  templateUrl: './f-usuarios.component.html',
  styles: ['']
})
export class FUsuariosComponent implements OnInit {
  titulo = '';
  cardHeaderStyle = '';
  id = '';
  miForm: FormGroup;
  tblClubes: ClubI[];

  constructor(
    public dataService: UsuariosService, 
    private clubService: ClubesService,
    public fb: FormBuilder,      
    private msgService: MensajesService,
    private location: Location, 
    private actRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.msgService.clearMessages();
    this.clubService.getRecords$().subscribe(
      data => this.tblClubes = data
    )
    //this.buildForm();
    this.setState();
  }

  setState() {
    const objTitulo = {add:'Agregar', edit: 'Modificar', delete: 'Eliminar'};
    this.titulo = objTitulo[this.actRoute.snapshot.url[1].path];
    
    const objStyle = {add:'bg-primary', edit: 'bg-warning', delete: 'bg-danger'}
    this.cardHeaderStyle = objStyle[this.actRoute.snapshot.url[1].path];

    this.id = this.actRoute.snapshot.paramMap.get('id');
    if (this.titulo == 'Agregar') {
      this.buildFormAgregar()
    } else {
      this.buildForm();
      this.setFormData();
    } 
  }

  buildFormAgregar() {
    this.miForm = this.fb.group({
      name: ['', [Validators.required] ],
      email: ['', [Validators.required] ],
      rol: ['', [Validators.required]],
      club: ['', [Validators.required] ],
      password: ['', [Validators.required, Validators.minLength(6)] ],
      password2: ['', [Validators.required, Validators.minLength(6)] ]
    });
  }

  buildForm() {
    this.miForm = this.fb.group({
      name: ['', [Validators.required] ],
      email: ['', [Validators.required] ],
      rol: ['', [Validators.required]],
      club: ['', [Validators.required] ]
    });
  }

  setFormData() {
    this.dataService.getRecord$(this.id).subscribe(
      data => {
        this.miForm.patchValue(data);
      }
    );
    if (this.titulo==='Eliminar') {
      this.miForm.controls.club.disable();
      this.miForm.controls.rol.disable();
    }
  }

  get name() {
    return this.miForm.get('name');
  }
  get email() {
    return this.miForm.get('email');
  }
  get club() {
    return this.miForm.get('club');
  }
  get rol() {
    return this.miForm.get('rol');
  }
  get password() {
    return this.miForm.get('password');
  }
  get password2() {
    return this.miForm.get('password2');
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
      data => {
        const email = this.miForm.controls.email.value;
        const pass = this.miForm.controls.password.value;
        this.dataService.afAuth.auth.createUserWithEmailAndPassword(email, pass).then(
          () => this.msgService.sendMessage(this.miForm.controls['name'].value + ' Agregado satisfactoriamente')
        )
      },
      error => this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['usuarios'])
    );
  }

  aceptarEditar() {
    this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['name'].value + ' Actualizado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['usuarios'])
    );
  }

  aceptarEliminar() {
    this.dataService.deleteRecord$(this.id).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['name'].value + ' Eliminado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'),
      () => this.router.navigate(['usuarios'])
    );
  }

  goBack() {
    this.location.back();
  }
}

