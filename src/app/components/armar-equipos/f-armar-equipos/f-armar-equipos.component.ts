import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MensajesService } from 'src/app/services/mensajes.service';
import { EquiposService } from 'src/app/services/equipos.service';
import { CategoriasService } from 'src/app/services/categorias.service'
import { CategoriaI } from 'src/app/models/categoria';
import { PalistaI } from 'src/app/models/palista';
import { SpinnerService } from 'src/app/services/spinner.service';
import { map } from 'rxjs/operators';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { GenerarCarrerasService } from 'src/app/services/generar-carreras.service';
import { PalistasService } from 'src/app/services/palistas.service';
import { UserI } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-f-armar-equipos',
  templateUrl: './f-armar-equipos.component.html',
  styles: []
})
export class FArmarEquiposComponent implements OnInit {
  titulo = '';
  cardHeaderStyle = '';
  id = '';
  miForm: FormGroup;
  usuario: UserI;

  tblCategorias: string[] = [];
  categorias: CategoriaI[] = [];
  tblDistancias: string[] = [];
  distancias: any[] = [];
  tblInscripciones: string[] = [];
  tblInscripciones2: string[] = [];
  tblInscripciones3: string[] = [];
  tblInscripciones4: string[] = [];
  inscripciones: any[] = [];
  
  constructor(
    private dataService: EquiposService, 
    private categoriasService: CategoriasService,
    private inscripcionesService: InscripcionesService,
    private generarCarreras: GenerarCarrerasService,
    private authService: AuthService,
    private fb: FormBuilder,      
    private msgService: MensajesService,
    private spinner: SpinnerService,
    private location: Location, 
    private actRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.usuario = this.authService.getUser();
    this.msgService.clearMessages();
    this.buildForm();
    this.setTblCategorias();
    this.setTblDistancias();
    this.setTblInscripciones();
    this.setState();
  }

  setTblCategorias() {
    this.categoriasService.getRecords$()
      .subscribe( 
        data =>  {
          this.tblCategorias = data.map(categoria => categoria.categoria);
          this.categorias = data;
        },
        error =>this.msgService.sendMessage("Error al cargar la tabla de categorías: " + error.statusText,"alert-danger")
      );
  }

  setTblDistancias() {
    this.inscripcionesService.getRecords$()
      .subscribe( 
        data =>  {
          this.distancias = this.generarCarreras.flatCarreras(data)
            .filter(distancia => ['K2 ', 'K4 '].includes(distancia.distancia.substr(0,3)));
          this.tblDistancias = this.distancias.map(distancia => distancia.distancia);
        },
        error =>this.msgService.sendMessage("Error al cargar la tabla de distancias: " + error.statusText,"alert-danger")
      );
  }

  setTblInscripciones() {
    this.inscripcionesService.getRecords$(this.usuario.club).subscribe(
      data => {
        this.inscripciones = this.generarCarreras.flatInscripciones(data);
        this.tblInscripciones = this.inscripciones.map( palista => palista.palista);
        this.tblInscripciones2 = this.tblInscripciones.slice();
        this.tblInscripciones3 = this.tblInscripciones.slice();
        this.tblInscripciones4 = this.tblInscripciones.slice();
      },
      error =>this.msgService.sendMessage("Error al cargar la tabla de palistas: " + error.statusText,"alert-danger")
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
      genero: ['', [Validators.required] ],
      categoria: ['', [Validators.required]],
      distancia: ['', [Validators.required]],
      palista1: ['', [Validators.required]],
      palista2: ['', [Validators.required]],
      palista3: ['', [Validators.required]],
      palista4: ['', [Validators.required]]
    });
  }

  setFormData() {
    this.dataService.getRecord$(this.id).subscribe(
      data => {
        this.miForm.patchValue(data);
        console.log('Form valid?', this.miForm.valid);
        console.log(this.miForm.controls.genero.valid);
        console.log(this.miForm.controls.categoria.valid);
        console.log(this.miForm.controls.distancia.valid);
        console.log(this.miForm.controls.palista1.valid);
        console.log(this.miForm.controls.palista2.valid);
        console.log(this.miForm.controls.palista3.valid);
        console.log(this.miForm.controls.palista4);
      }
    );
    
    if (this.titulo === 'Agregar') {
      this.miForm.controls.palista1.disable();
      this.miForm.controls.palista2.disable();
    }
    if (this.titulo==='Eliminar') {
      this.miForm.controls.genero.disable();
      this.miForm.controls.categoria.disable();
      this.miForm.controls.distancia.disable();
      this.miForm.controls.palista1.disable();
      this.miForm.controls.palista2.disable();
      this.miForm.controls.palista3.disable();
      this.miForm.controls.palista4.disable();
    }
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
  get palista1() {
    return this.miForm.get('palista1');
  }
  get palista2() {
    return this.miForm.get('palista2');
  }
  get palista3() {
    return this.miForm.get('palista3');
  }
  get palista4() {
    return this.miForm.get('palista4');
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
  
  onChangeGenero(genero: string) {
    this.tblCategorias = this.categorias
                            .filter( elemento => elemento.genero.includes(genero))
                            .map( categoria => categoria.categoria);
    this.miForm.controls.categoria.setValue('');
    this.miForm.controls.distancia.setValue('');
    this.miForm.controls.palista1.setValue('');
    this.miForm.controls.palista2.setValue('');
  }

  onChangeCategoria(genero, categoria) {
    this.tblDistancias = this.distancias
                          .filter( elemento => elemento.genero === genero && elemento.categoria === categoria)
                          .map( distancia => distancia.distancia);
    this.miForm.controls.distancia.setValue('');
    this.miForm.controls.palista1.setValue('');
    this.miForm.controls.palista2.setValue('');                          
  }

  onChangeDistancia(genero, categoria, distancia) {
    this.tblInscripciones = this.inscripciones
                          .filter( elemento => 
                            elemento.genero === genero && elemento.categoria === categoria && elemento.distancia === distancia)
                          .map( palista => palista.palista);
    this.tblInscripciones2 = this.tblInscripciones.slice();
    this.miForm.controls.palista1.setValue('');
    this.miForm.controls.palista2.setValue('');
    if (distancia.substr(0,2) === 'K4') {
      this.miForm.addControl('palista3', this.fb.control('', Validators.required) );
      this.miForm.addControl('palista4', this.fb.control('', Validators.required) );
    }
    else if (this.miForm.controls.palista3) {
      this.miForm.removeControl('palista3');
      this.miForm.removeControl('palista4s');
    }              
  }

  onChangePalista1(palista) {
    this.tblInscripciones2 = this.tblInscripciones.slice();
    if (palista) {
      const indice = this.tblInscripciones2.indexOf(palista);
      if (indice > -1) {
        this.tblInscripciones2.splice(indice, 1);
      }
      this.miForm.controls.palista2.setValue('');                          
    }
  }

  onChangePalista2(palista) {
    this.tblInscripciones3 = this.tblInscripciones2.slice();
    if (palista) {
      const indice = this.tblInscripciones3.indexOf(palista);
      if (indice > -1) {
        this.tblInscripciones3.splice(indice, 1);
      }
      this.miForm.controls.palista3.setValue('');                          
    }
  }

  onChangePalista3(palista) {
    this.tblInscripciones4 = this.tblInscripciones3.slice();
    if (palista) {
      const indice = this.tblInscripciones4.indexOf(palista);
      if (indice > -1) {
        this.tblInscripciones4.splice(indice, 1);
      }
      this.miForm.controls.palista4.setValue('');                          
    }
  }

  aceptarAgregar() {
    this.dataService.addRecord$(this.miForm.value).subscribe(
      data => this.msgService.sendMessage('Equipo Agregado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'),
      () => this.retornar()
    );
  }

  aceptarEditar() {
    this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(
      data => this.msgService.sendMessage('Equipo Actualizado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'),
      () => this.retornar()
    );
  }

  aceptarEliminar() {
    this.dataService.deleteRecord$(this.id).subscribe(
      data => this.msgService.sendMessage('Equipo Eliminado satisfactoriamente'),
      error => this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'),
      () => this.retornar()
    );
  }

  retornar() {
    this.spinner.off();
    this.router.navigate(['armar-equipos']);
  }

  goBack() {
    this.location.back();
  }
}
