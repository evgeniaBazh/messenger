import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { UserCredential } from 'firebase/auth';
import { UserData } from 'src/app/types/user-data.interface';

export enum TabNames {
  LOGIN,
  REGISTER,
}

export interface Tab {
  label: string;
  name: TabNames;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentTab: TabNames = TabNames.LOGIN;
  constructor(private auth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {}
  
  setCurrentTab(currentTab: TabNames) {
    this.currentTab = currentTab
  }

  getCurrentTab() {
    return this.currentTab;
  }

  async login(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['/']);
  }
  
  async register(registerForm: UserData) {
    try {
      const credentials: firebase.default.auth.UserCredential = await this.auth.createUserWithEmailAndPassword(registerForm.email, registerForm.password);
      // Показывать TOAST
      const usersCollection = this.afs.collection('users');
      const userData: UserData = {
        ...registerForm,
        userId: credentials.user?.uid || '',
      }
      
      usersCollection.doc(userData.userId).set(userData);
      this.setCurrentTab(TabNames.LOGIN);
    } catch(err) {
      // TODO показывать TOAST
      throw err;
    }
  }

}
