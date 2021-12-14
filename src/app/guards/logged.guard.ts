import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
import { User } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanLoad {
  constructor(private router: Router, private auth: AngularFireAuth) {}
  canLoad(): Observable<boolean>{
    return this.auth.authState.pipe(
      map((user: any) => {
        console.log(user);
        
        const logged = !!user;
        if (!logged) {
          this.router.navigate(['auth']);
        }
        return logged;
      })
    )
  }
}
