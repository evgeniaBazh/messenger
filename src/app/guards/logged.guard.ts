import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { User } from 'firebase/auth';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const currentUserObserver = this.authService.getCurrentUser();
    return currentUserObserver.pipe(
      map((currentUser: User | null) => {
        if (!currentUser) {
          this.router.navigate(['auth']);
          return false;
        }
        return true;
      }),
      catchError((err) => {
        this.router.navigate(['auth']);
        throw err;
      })
    );
    
  }
}
