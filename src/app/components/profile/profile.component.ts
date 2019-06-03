import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UserI } from "src/app/models/user";
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ClubesService } from 'src/app/services/clubes.service';
import { Observable } from 'rxjs';
import { map, tap, flatMap } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styles: ['']
})
export class ProfileComponent implements OnInit {
  @ViewChild('clubImage') clubImage: ElementRef;
  usuario$: Observable<any>;
  
  constructor(private authService: AuthService, 
              private usuarioService: UsuariosService,
              private clubService:ClubesService,
              private router: Router,
              private storage: AngularFireStorage) {}

  ngOnInit() {
    console.log(this.clubImage);
    const email = this.authService.getUser().email;
    this.usuario$ = this.usuarioService.getUsuarioByEmail$(email).pipe(
      flatMap( usuario => this.clubService.getClubBy$('nombre', usuario.club).pipe(
        map(club => { 
          const gsReference = this.storage.storage.refFromURL(club.imageUrl);
          gsReference.getDownloadURL().then(
            url => { 
              this.clubImage.nativeElement.src = url;
            }
          )
          return { ...usuario, 'imageUrl': club.imageUrl };
        }),
        tap(data => console.log(data.imageUrl))
      ))
    );
  }

  onSubmit() {
    this.router.navigate(["home"]);
  }

}
