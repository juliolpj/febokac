import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login(this.email, this.password)
      .then( (res) => {
        //console.log(res.user);
        this.router.navigate(['home']);
    }).catch( err => console.log('err', err.message));
  }

}
