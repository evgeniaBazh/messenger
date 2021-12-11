import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, User } from "firebase/auth";
import { Observable, Subject } from 'rxjs';
import { AppService } from '../app.service';


@Injectable()
export class AuthService {

  constructor(private appService: AppService) {
  }
  currentUser!: User;
  auth: Auth = getAuth(this.appService.app);
  async register(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password)
    try {
      this.currentUser = userCredential.user;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }
  async login(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password)
    try {
      this.currentUser = userCredential.user;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;

    }
  }

  public getCurrentUser(): Observable<User | null> {
    const currentUserSubject = new Subject<User | null>();
    const nextFn = (value: User | null) => {
      currentUserSubject.next(value);
    }
    this.auth.onIdTokenChanged(nextFn)
    return currentUserSubject.asObservable();
  }
}
