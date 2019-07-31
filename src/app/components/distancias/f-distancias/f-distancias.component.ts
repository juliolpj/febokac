import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { DistanciasService } from 'src/app/services/distancias.service';
import { DistanciaI } from 'src/app/models/distancia';
import { map, single } from 'rxjs/operators';
import { MsgService } from 'src/app/services/msg.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { CompetenciaI } from 'src/app/models/competencia';
import { CompetenciasService } from 'src/app/services/competencias.service';

@Component({
  selector: 'app-f-distancias',
  templateUrl: './f-distancias.component.html',
  styles: ['']
})
export class FDistanciasComponent implements OnInit {
  titulo = '';
  cardHeaderStyle = '';
  miForm: FormGroup;
  categorias: string[] = [];
  competencia: CompetenciaI;
  parCompetencia = '';
  parAccion = '';
  parId = '';

  constructor(
    public dataService: CompetenciasService, 
    public categoriasService: CategoriasService,
    public fb: FormBuilder,
    private msg: MsgService,      
    private location: Location, 
    private actRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    console.log('FDistancias component');
    this.setTblCategoria();
    this.buildForm();
    this.setState();

    this.dataService.getRecord$(this.parCompetencia).subscribe(
      data => {
          this.competencia = data;
          if (this.titulo !== 'Agregar') {
            this.miForm.patchValue(data.distancia[this.parId]);
            if (this.titulo==='Eliminar') {
              this.miForm.controls.embarcacion.disable();
            }
          }
      }
    );
  }

  async setState() {
    this.parCompetencia = this.actRoute.snapshot.paramMap.get('competencia');
    this.parAccion = this.actRoute.snapshot.paramMap.get('accion');
    this.parId = this.actRoute.snapshot.paramMap.get('id');
    
    const objTitulo = {add:'Agregar', edit: 'Modificar', delete: 'Eliminar'};
    this.titulo = objTitulo[this.parAccion];
    
    const objStyle = {add:'bg-primary', edit: 'bg-warning', delete: 'bg-danger'}
    this.cardHeaderStyle = objStyle[this.parAccion];
  }

  buildForm() {
    this.miForm = this.fb.group({
      categoria: ['', [Validators.required] ],
      embarcacion: ['', [Validators.required] ],
      metros: [0, [Validators.required] ],
      distancia: ['', [Validators.required] ]
    });
  }

  setTblCategoria() {
    this.categoriasService.getRecords$().pipe(
      map(data => data.map(categoria => categoria.categoria))
    ).subscribe( 
      data => this.categorias = data,
      error =>this.msg.error("Error al cargar la tabla de clubes: " + error.statusText)
    );
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
  get categoria() {
    return this.miForm.get('categoria');
  }

  onSubmit() {
    this.prepararArreglo(this.titulo);
    this.guardar();
  }
  
  prepararArreglo(parAccion: string) {
    let objDistancia = {
      categoria: this.miForm.controls.categoria.value,
      embarcacion: this.miForm.controls.embarcacion.value,
      distancia: this.miForm.controls.distancia.value,
    }
    console.log("this.competencia", this.competencia)
    if (!this.competencia.distancia) {
      this.competencia = {...this.competencia, distancia: [objDistancia]}
    } else if (parAccion === 'Agregar') {
      this.competencia.distancia.push(objDistancia)
    } else if (parAccion === 'Modificar') {
      this.competencia.distancia.splice(+this.parId, 1, objDistancia)
    } else if (parAccion === 'Eliminar') {
      this.competencia.distancia.splice(+this.parId, 1)
    }
  }

  guardar() {
    this.dataService.updateRecord$(this.parCompetencia, this.competencia).subscribe(
      _ => this.msg.ok(this.miForm.controls['distancia'].value + ' Actualizado satisfactoriamente'),
      error => this.msg.error('Error al actualizar los datos: ' + error.statusText),
      () => this.goBack()
    );
  }

  goBack() {
    this.location.back();
  }
}

