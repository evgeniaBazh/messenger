import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, User, UserCredential } from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppService } from '../app.service';
import { UserData } from '../types/user-data.interface';


@Injectable()
export class AuthService {

  constructor(private appService: AppService, private router: Router) {
  }
  auth: Auth = getAuth(this.appService.app);
  async register(user: UserData) {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(this.auth, user.email, user.password);
      const docRef = await addDoc(collection(this.appService.db, 'users'), {
        name: user.name,
        email: userCredential.user.email,
        photoURL: userCredential.user.photoURL,
        phone: user.phone,
      });
    } catch (error: any) {
      // TODO добавить отображение ошибок
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage, errorCode)
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
