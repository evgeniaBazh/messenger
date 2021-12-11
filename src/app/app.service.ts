import { Injectable } from '@angular/core';
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  
  config: FirebaseOptions = {
    apiKey: 'AIzaSyDEP2Or8C84DM9xxk1tX2Oi2xlfR0_9CkU',
    authDomain: 'full-shrek-messenger.firebaseapp.com',
    projectId: 'full-shrek-messenger',
    storageBucket: 'full-shrek-messenger.appspot.com',
    messagingSenderId: '394401023186',
    appId: '1:394401023186:web:d2c9a8a11cfa6391d6d90b',
    measurementId: '${config.measurementId}'
  }
  public db!: Firestore;
  public app!: FirebaseApp;
  constructor() { }
  initFirebaseApp() {
    this.app = initializeApp(this.config);
    this.db = getFirestore();
  }
}
