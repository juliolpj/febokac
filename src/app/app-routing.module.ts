import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { AuthLocalGuard } from './guards/authLocal.guard';

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
import { GenerarSeriesComponent } from './components/mcompetencia/generar-series/generar-series.component';
import { CargarTiemposComponent } from './components/mcompetencia/series/cargar-tiempos/cargar-tiempos.component';
import { InicializarCompetenciaComponent } from './components/mcompetencia/inicializar-competencia/inicializar-competencia.component';
import { RedireccionarLoginComponent } from './components/mcompetencia/redireccionar-login/redireccionar-login.component';
import { ArmarEquiposComponent } from './components/armar-equipos/armar-equipos.component';
import { FArmarEquiposComponent } from './components/armar-equipos/f-armar-equipos/f-armar-equipos.component';
import { FlatComponent } from './pruebas/ProgramacionFuncional/flat/flat.component';
import { ConsultarInscripcionesComponent } from './components/inscripciones/consultar-inscripciones/consultar-inscripciones.component';
import { ResultadosComponent } from './components/mcompetencia/series/resultados/resultados.component';
import { SeriesComponent } from './components/mcompetencia/series/series.component';
import { AsignarNumeroComponent } from './components/mcompetencia/series/asignar-numero/asignar-numero.component';
import { EditarSerieComponent } from './components/mcompetencia/series/editar-serie/editar-serie.component';

const competenciasRutas = [
  { path: 'competencias/palistas', component: PalistasComponent, canActivate: [AuthGuard] },
    { path: 'competencias/palistas/add', component: FPalistasComponent, canActivate: [AuthGuard] },
    { path: 'competencias/palistas/edit/:id', component: FPalistasComponent, canActivate: [AuthGuard] },
    { path: 'competencias/palistas/delete/:id', component: FPalistasComponent, canActivate: [AuthGuard] },
    { path: 'importar-inscripciones', component: ImportarComponent },
    { path: 'generar-carreras', component: GenerarSeriesComponent, canActivate: [AuthGuard] },
    { path: 'editar-serie', component: EditarSerieComponent, canActivate: [AuthGuard] },
    { path: 'series', component: SeriesComponent, canActivate: [AuthGuard]},
      { path: 'series/asignar-numero/:id', component: AsignarNumeroComponent, canActivate: [AuthGuard]},
      { path: 'series/cargar-tiempos/:id', component: CargarTiemposComponent, canActivate: [AuthGuard]},
      { path: 'series/resultados/:id', component: ResultadosComponent, canActivate: [AuthGuard]},
];
const routes: Routes = [
  // { path: 'prueba', component: MockGuardarComponent },
  // { path: 'pruebas/download', component: DownloadComponent },
  { path: 'consultar-inscripciones', component: ConsultarInscripcionesComponent, canActivate: [AuthGuard]},
  { path: 'flat', component: FlatComponent},
  { path: 'redireccionar-login', component: RedireccionarLoginComponent },
  { path: 'inicializar-competencia', component: InicializarCompetenciaComponent },
  ...competenciasRutas,
  { path: 'armar-equipos', component: ArmarEquiposComponent, canActivate: [AuthGuard] },
    { path: 'armar-equipos/add', component: FArmarEquiposComponent, canActivate: [AuthGuard] },
    { path: 'armar-equipos/edit/:id', component: FArmarEquiposComponent, canActivate: [AuthGuard] },
    { path: 'armar-equipos/delete/:id', component: FArmarEquiposComponent, canActivate: [AuthGuard] },
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
    { path: 'login', component: LoginComponent, canActivate: [AuthLocalGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
