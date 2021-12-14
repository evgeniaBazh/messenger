import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoggedOutGuard implements CanLoad {
  constructor(private auth: AngularFireAuth) {}
  canLoad(): Observable<boolean>{
    return this.auth.authState.pipe(
      map((user: any) => {
        const logged = !!user;
        return !logged;
      })
    )
  }
}