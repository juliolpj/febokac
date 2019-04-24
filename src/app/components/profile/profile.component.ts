import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserI } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  user: UserI = {};
  clubArray = [
    {
      "nombre": "El Club de Remo y Náutica Belén de Escobar",
      "img": "assets/img/clubes/crnbe1.png"
    },
    {
        "nombre": "Club de Regatas La Plata",
        "img": "assets/img/clubes/crlp1.png"
    },
    {
        "nombre": "Las Canaletas San Pedro",
        "img": "assets/img/clubes/cpcn_villa gesel1.png"
    },
    {
        "nombre": "Centro Náutico del Fuerte Tandil",
        "img": "assets/img/clubes/cnf_tandil1.png"
    },
    {
        "nombre": "Club Atlético Estudiantes de Olavarría",
        "img": "assets/img/clubes/cae_olavarria1.png"
    }
]
  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isAuth().subscribe(
      user => {
        if (user) {
          this.user.name = user.displayName;
          this.user.email = user.email;
          this.user.photoUrl = user.photoURL;
          this.user.uid = user.uid;
          this.authService.getProfile(this.user.uid).subscribe(
            data => {
              console.log('adicionalData', data);
              this.user.club = data.club;
            }
          );
          
        }
      }
    );

    
  }

  onSubmit() {
    this.authService.updateUser(this.user);
  }

  updatePhotoUrl(nombreClub) {
    this.user.photoUrl = this.clubArray.find( data => data.nombre == nombreClub).img;
    console.log(this.user.photoUrl);
    
  }
}
