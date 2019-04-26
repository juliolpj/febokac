import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UserI } from "src/app/models/user";
import { Router } from '@angular/router';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styles: []
})
export class ProfileComponent implements OnInit {
  user: UserI = {};
  clubArray = [
    {
      nombre: "El Club de Remo y Náutica Belén de Escobar",
      img: "assets/img/clubes/crnbe1.png"
    },
    {
      nombre: "Club de Regatas La Plata",
      img: "assets/img/clubes/crlp1.png"
    },
    {
      nombre: "Las Canaletas San Pedro",
      img: "assets/img/clubes/cpcn_villa gesel1.png"
    },
    {
      nombre: "Centro Náutico del Fuerte Tandil",
      img: "assets/img/clubes/cnf_tandil1.png"
    },
    {
      nombre: "Club Atlético Estudiantes de Olavarría",
      img: "assets/img/clubes/cae_olavarria1.png"
    }
  ];
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = this.authService.user;
    console.log("NgOnInit Profile");
  }

  onSubmit() {
    this.authService.updateUser(this.user);
    this.router.navigate(["home"]);
  }

  updatePhotoUrl(nombreClub) {
    this.user.photoUrl = this.clubArray.find(
      data => data.nombre == nombreClub
    ).img;
    console.log(this.user.photoUrl);
  }

  fetchUser() {
    this.user.name = this.authService.user.name;
    this.user.email = this.authService.user.email;
    this.user.photoUrl = this.authService.user.photoUrl;
    this.user.uid = this.authService.user.uid;
    this.user.club = this.authService.user.club;
  }
}
