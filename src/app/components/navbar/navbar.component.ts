import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogged = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe( auth => {
      if (auth) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    })
  }

  onLogout() {
    this.authService.logoutUser();
  }
}
