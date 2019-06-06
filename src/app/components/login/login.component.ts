import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  retornar = '';
  constructor(private authService: AuthService, 
              private router: Router,
              private route: ActivatedRoute,
              private msgService: MensajesService) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.retornar = params['retornar'] || '/home');
  }

  onLogin() {
    this.msgService.clearMessages();
    this.authService.login$(this.email, this.password).subscribe(
      () => this.router.navigate([this.retornar]),
      error => this.msgService.sendMessage('Error: Ocurrió un error, verifique el email y la contraseña', 'alert-danger')
    );

  }

}
