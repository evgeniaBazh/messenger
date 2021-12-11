import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, User } from "firebase/auth";
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppService } from '../app.service';


@Injectable()
export class AuthService {

  constructor(private appService: AppService, private router: Router) {
  }
  auth: Auth = getAuth(this.appService.app);
  async register(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password)
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }
  async login(email: string, password: string) {
    try {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    this.router.navigate(['']);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

    }
  }

  logout() {
    this.auth.signOut();
  }

  public getCurrentUser(): Observable<User | null> {
    const currentUserSubject = new Subject<User | null>();
    const nextFn = (value: User | null) => {
      currentUserSubject.next(value);
    }
    this.auth.onIdTokenChanged(nextFn)
    return currentUserSubject.asObservable();
  }

  isLoggedIn() {
    const currentUserObserver = this.getCurrentUser();
    return currentUserObserver.pipe(
      map((currentUser: User | null) => {
        if (!currentUser) {
          return false;
        }
        return true;
      }),
      catchError((err) => {
        throw err;
      })
    );
  }
}
