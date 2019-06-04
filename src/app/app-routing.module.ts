import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PalistasComponent } from './components/palistas/palistas.component';
import { FPalistasComponent } from './components/palistas/f-palistas/f-palistas.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { FInscripcionesComponent } from './components/inscripciones/f-inscripciones/f-inscripciones.component';
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
import { DownloadComponent } from './pruebas/download/download.component';
import { ImportarComponent } from './components/mcompetencia/importar/importar.component';

import { AuthGuard } from './guards/auth.guard';
import { GenerarCarrerasComponent } from './components/mcompetencia/generar-carreras/generar-carreras.component';

const competenciasRutas = [
  { path: 'competencias/palistas', component: PalistasComponent, canActivate: [AuthGuard] },
    { path: 'competencias/palistas/add', component: FPalistasComponent, canActivate: [AuthGuard] },
    { path: 'competencias/palistas/edit/:id', component: FPalistasComponent, canActivate: [AuthGuard] },
    { path: 'competencias/palistas/delete/:id', component: FPalistasComponent, canActivate: [AuthGuard] }
];
const routes: Routes = [
  // { path: 'prueba', component: MockGuardarComponent },
  // { path: 'pruebas/download', component: DownloadComponent },
  ...competenciasRutas,
  { path: 'importar-inscripciones', component: ImportarComponent, canActivate: [AuthGuard] },
  { path: 'generar-carreras', component: GenerarCarrerasComponent, canActivate: [AuthGuard] },
  { path: 'consola', component: ConsolaComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
    { path: 'usuarios/add', component: FUsuariosComponent, canActivate: [AuthGuard] },
    { path: 'usuarios/edit/:id', component: FUsuariosComponent, canActivate: [AuthGuard] },
    { path: 'usuarios/delete/:id', component: FUsuariosComponent, canActivate: [AuthGuard] },
  { path: 'distancias', component: DistanciasComponent, canActivate: [AuthGuard] },
    { path: 'distancias/add', component: FDistanciasComponent, canActivate: [AuthGuard] },
    { path: 'distancias/edit/:id', component: FDistanciasComponent, canActivate: [AuthGuard] },
    { path: 'distancias/delete/:id', component: FDistanciasComponent, canActivate: [AuthGuard] },
  { path: 'competencias', component: CompetenciasComponent, canActivate: [AuthGuard] },
    { path: 'competencias/add', component: FCompetenciasComponent, canActivate: [AuthGuard] },
    { path: 'competencias/edit/:id', component: FCompetenciasComponent, canActivate: [AuthGuard] },
    { path: 'competencias/delete/:id', component: FCompetenciasComponent, canActivate: [AuthGuard] },
  { path: 'empleados', component: EmpleadosComponent, canActivate: [AuthGuard] },
  { path: 'empleados/add', component: FEmpleadosComponent, canActivate: [AuthGuard] },
    { path: 'empleados/edit/:id', component: FEmpleadosComponent, canActivate: [AuthGuard] },
    { path: 'empleados/delete/:id', component: FEmpleadosComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard] },
  { path: 'clubes', component: ClubesComponent, canActivate: [AuthGuard]},
    { path: 'clubes/add', component: FClubesComponent, canActivate: [AuthGuard] },
    { path: 'clubes/edit/:id', component: FClubesComponent, canActivate: [AuthGuard] },
    { path: 'clubes/delete/:id', component: FClubesComponent, canActivate: [AuthGuard] },
    { path: 'clubes/logo/:id', component: SubirLogoComponent, canActivate: [AuthGuard] },
  { path: 'categorias', component: CategoriasComponent, canActivate: [AuthGuard]},
    { path: 'categorias/add', component: FCategoriasComponent, canActivate: [AuthGuard] },
    { path: 'categorias/edit/:id', component: FCategoriasComponent, canActivate: [AuthGuard] },
    { path: 'categorias/delete/:id', component: FCategoriasComponent, canActivate: [AuthGuard] },
  { path: 'palistas', component: PalistasComponent, canActivate: [AuthGuard] },
    { path: 'palistas/add', component: FPalistasComponent, canActivate: [AuthGuard] },
    { path: 'palistas/edit/:id', component: FPalistasComponent, canActivate: [AuthGuard] },
    { path: 'palistas/delete/:id', component: FPalistasComponent, canActivate: [AuthGuard] },
  { path: 'inscripciones', component: InscripcionesComponent, canActivate: [AuthGuard] },
    { path: 'inscripciones/add', component: FInscripcionesComponent, canActivate: [AuthGuard] },
    { path: 'inscripciones/edit/:id', component: FInscripcionesComponent, canActivate: [AuthGuard] },
    { path: 'inscripciones/delete/:id', component: FInscripcionesComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
