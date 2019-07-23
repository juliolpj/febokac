import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { environment } from 'src/environments/environment';
import { ProfileComponent } from './components/profile/profile.component';
import { PalistasComponent } from './components/palistas/palistas.component';
import { FPalistasComponent } from './components/palistas/f-palistas/f-palistas.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
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
import { ModalCompetenciaComponent } from './components/modal-competencia/modal-competencia.component';
import { DownloadComponent } from './pruebas/download/download.component';
import { ModalDownloadComponent } from './components/modal-download/modal-download.component';
import { ImportarComponent } from './components/mcompetencia/importar/importar.component';
import { NavbarCompetenciasComponent } from './components/navbar/navbar-competencias/navbar-competencias.component';
import { NavbarInscripcionesComponent } from './components/navbar/navbar-inscripciones/navbar-inscripciones.component';
import { NavbarAdministracionComponent } from './components/navbar/navbar-administracion/navbar-administracion.component';
import { GenerarSeriesComponent } from './components/mcompetencia/generar-series/generar-series.component';
import { CargarTiemposComponent } from './components/mcompetencia/series/cargar-tiempos/cargar-tiempos.component';
import { InicializarCompetenciaComponent } from './components/mcompetencia/inicializar-competencia/inicializar-competencia.component';
import { RedireccionarLoginComponent } from './components/mcompetencia/redireccionar-login/redireccionar-login.component';
import { ArmarEquiposComponent } from './components/armar-equipos/armar-equipos.component';
import { FArmarEquiposComponent } from './components/armar-equipos/f-armar-equipos/f-armar-equipos.component';
import { FlatComponent } from './pruebas/ProgramacionFuncional/flat/flat.component';
import { ConsultarInscripcionesComponent } from './components/inscripciones/consultar-inscripciones/consultar-inscripciones.component';
import { FiltroComponent } from './components/inscripciones/consultar-inscripciones/filtro.component';
import { ResultadosComponent } from './components/mcompetencia/series/resultados/resultados.component';
import { SeriesComponent } from './components/mcompetencia/series/series.component';
import { AsignarNumeroComponent } from './components/mcompetencia/series/asignar-numero/asignar-numero.component';
import { TimeFormatDirective } from './directives/time-format.directive';
import { SeriesHeaderComponent } from './components/mcompetencia/series/series-header/series-header.component';
import { EditarSerieComponent } from './components/mcompetencia/series/editar-serie/editar-serie.component';
import { FiltroSerieComponent } from './components/mcompetencia/series/editar-serie/filtro-serie.component';
import { GenerarSemisComponent } from './components/mcompetencia/semis/generar-semis/generar-semis.component';
import { FiltroSemisComponent } from './components/mcompetencia/semis/generar-semis/filtro-semis.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    PalistasComponent,
    FPalistasComponent,
    MensajesComponent,
    InscripcionesComponent,
    FInscripcionesComponent,    
    ClubesComponent,
    FClubesComponent,
    SubirLogoComponent,
    CategoriasComponent,
    FCategoriasComponent,
    MockGuardarComponent,
    EmpleadosComponent,
    FEmpleadosComponent,
    UsuariosComponent,
    FUsuariosComponent,
    DistanciasComponent,
    FDistanciasComponent,
    CompetenciasComponent,
    FCompetenciasComponent,
    ConsolaComponent,
    ModalCompetenciaComponent,
    DownloadComponent,
    ModalDownloadComponent,
    ImportarComponent,
    NavbarCompetenciasComponent,
    NavbarInscripcionesComponent,
    NavbarAdministracionComponent,
    GenerarSeriesComponent,
    CargarTiemposComponent,
    InicializarCompetenciaComponent,
    RedireccionarLoginComponent,
    ArmarEquiposComponent,
    FArmarEquiposComponent,
    FlatComponent,
    ConsultarInscripcionesComponent,
    FiltroComponent,
    ResultadosComponent,
    SeriesComponent,
    AsignarNumeroComponent,
    TimeFormatDirective,
    SeriesHeaderComponent,
    EditarSerieComponent,
    FiltroSerieComponent,
    GenerarSemisComponent,
    FiltroSemisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [
    { provide: FirestoreSettingsToken, useValue: {} },
    AngularFireStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
