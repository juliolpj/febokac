import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PalistasComponent } from './components/palistas/palistas.component';
import { FPalistasComponent } from './components/palistas/f-palistas/f-palistas.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { ClubesComponent } from './components/clubes/clubes.component';
import { FClubesComponent } from './components/clubes/f-clubes/f-clubes.component';
import { SubirLogoComponent } from './components/subir-logo/subir-logo.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { FCategoriasComponent } from './components/categorias/f-categorias/f-categorias.component';
import { MockGuardarComponent } from './pruebas/mock-guardar/mock-guardar.component';
import { EmpleadosComponent } from './pruebas/empleados/empleados.component';
import { FEmpleadosComponent } from './pruebas/empleados/f-empleados/f-empleados.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FUsuariosComponent } from './components/usuarios/f-usuarios/f-usuarios.component';
import { DistanciasComponent } from './components/distancias/distancias.component';
import { FDistanciasComponent } from './components/distancias/f-distancias/f-distancias.component';
import { CompetenciasComponent } from './components/competencias/competencias.component';
import { FCompetenciasComponent } from './components/competencias/f-competencias/f-competencias.component';
import { ConsolaComponent } from './components/consola/consola.component';

const routes: Routes = [
  { path: 'prueba', component: MockGuardarComponent },
  { path: 'consola', component: ConsolaComponent },
  { path: 'usuarios', component: UsuariosComponent },
    { path: 'usuarios/add', component: FUsuariosComponent },
    { path: 'usuarios/edit/:id', component: FUsuariosComponent },
    { path: 'usuarios/delete/:id', component: FUsuariosComponent },
  { path: 'distancias', component: DistanciasComponent },
    { path: 'distancias/add', component: FDistanciasComponent },
    { path: 'distancias/edit/:id', component: FDistanciasComponent },
    { path: 'distancias/delete/:id', component: FDistanciasComponent },
  { path: 'competencias', component: CompetenciasComponent },
    { path: 'competencias/add', component: FCompetenciasComponent },
    { path: 'competencias/edit/:id', component: FCompetenciasComponent },
    { path: 'competencias/delete/:id', component: FCompetenciasComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'empleados/add', component: FEmpleadosComponent },
    { path: 'empleados/edit/:id', component: FEmpleadosComponent },
    { path: 'empleados/delete/:id', component: FEmpleadosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'clubes', component: ClubesComponent},
    { path: 'clubes/add', component: FClubesComponent },
    { path: 'clubes/edit/:id', component: FClubesComponent },
    { path: 'clubes/delete/:id', component: FClubesComponent },
    { path: 'clubes/logo/:id', component: SubirLogoComponent },
  { path: 'categorias', component: CategoriasComponent},
    { path: 'categorias/add', component: FCategoriasComponent },
    { path: 'categorias/edit/:id', component: FCategoriasComponent },
    { path: 'categorias/delete/:id', component: FCategoriasComponent },
  { path: 'palistas', component: PalistasComponent },
    { path: 'palistas/add', component: FPalistasComponent },
    { path: 'palistas/edit/:id', component: FPalistasComponent },
    { path: 'palistas/delete/:id', component: FPalistasComponent },
  { path: 'inscripciones', component: InscripcionesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
