import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserI } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: ['']
})
export class NavbarComponent implements OnInit {
  public usuario: UserI; 

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  
    this.authService.getUser$().subscribe(
      usuario => {
        this.usuario = usuario;
        console.log(this.usuario.name);
      }
    );
    
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['home'])
  }
}
