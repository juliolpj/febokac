import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Location } from '@angular/common';

import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { from } from 'rxjs';

@Component({
  selector: 'app-mock-guardar',
  templateUrl: './mock-guardar.component.html',
  styles: ['']
})
export class MockGuardarComponent implements OnInit {
  private collection: AngularFirestoreCollection<any>;
  titulo = '';
  cardHeaderStyle = '';
  id = '';
  miForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private msgService: MensajesService,
    private location: Location,
    private afs: AngularFirestore) {
      this.collection = this.afs.collection<any>("prueba");
  }

  ngOnInit() {
    this.buildForm();
    this.setState();
  }

  setState() {
    this.cardHeaderStyle = 'bg-primary';

  }

  buildForm() {
    this.miForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['']
    });
  }

  setFormData() {
    if (this.titulo==='Eliminar') {
      this.miForm.controls.genero.disable();
    }
  }

  get nombre() {
    return this.miForm.get('nombre');
  }
  get apellido() {
    return this.miForm.get('apellido');
  }

  onSubmit() {
    this.aceptarAgregar();
  }
  
  aceptarAgregar() {
    this.addRecord$(this.miForm.value).subscribe(
      data => this.msgService.sendMessage(this.miForm.controls['nombre'].value + ' Agregado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'),
      () => this.msgService.sendMessage(' Completado satisfactoriamente')
    );
  }

  goBack() {
    this.location.back();
  }

  addRecord$(registro: any) {
    return from(this.collection.add(registro));
  }

}

