import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}
  canLoad(): Observable<boolean>{
    return this.authService.isLoggedIn().pipe(
      map((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          return isLoggedIn;
        }
        this.router.navigate(['auth']);
        return isLoggedIn;
      }),
      catchError(err => {
        this.router.navigate(['auth']);
        throw err;
      })
    )
  }
}
