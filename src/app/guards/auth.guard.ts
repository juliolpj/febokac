import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const usuario = this.authService.getUser();
      if ( !!usuario && !!usuario.rol ) {
        return true;
      } else { 
        this.router.navigate(["login"], { queryParams: { retornar: state.url } });
        return false;
      }
  }
}
