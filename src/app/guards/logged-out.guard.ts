import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}
  canLoad(): Observable<boolean>{
    return this.authService.isLoggedIn().pipe(
      map((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.router.navigate(['']);
          return !isLoggedIn;
        }
        return !isLoggedIn;
      }),
      catchError(err => {
        this.router.navigate(['']);
        throw err;
      })
    )
  }
  
}
