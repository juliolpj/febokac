import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PalistasComponent } from './components/palistas/palistas.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { ClubesComponent } from './components/clubes/clubes.component';
import { FClubesComponent } from './components/clubes/f-clubes/f-clubes.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clubes', component: ClubesComponent},
    { path: 'clubes/add', component: FClubesComponent },
    { path: 'clubes/edit/:id', component: FClubesComponent },
    { path: 'clubes/delete/:id', component: FClubesComponent },
  { path: 'palistas', component: PalistasComponent },
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
