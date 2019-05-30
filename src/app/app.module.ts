import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';

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
    ImportarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  providers: [
    { provide: FirestoreSettingsToken, useValue: {} },
    AngularFireStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
