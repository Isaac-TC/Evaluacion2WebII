import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.getUser();

    if (!user) {
      this.router.navigate(['/home']); // Si no está autenticado, redirigir al home
      return false;
    }

    // Obtener la ruta solicitada (docentes o estudiantes)
    const expectedRole = route.url[0].path;

    // Si intenta acceder a una ruta que no es de su rol, redirigir al home
    if ((expectedRole === 'docentes' && user.role !== 'docente') || 
        (expectedRole === 'estudiantes' && user.role !== 'estudiante')) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
