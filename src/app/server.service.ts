import { Injectable } from '@angular/core';
import { FirebaseOptions, initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  config: FirebaseOptions = {
    apiKey: 'AIzaSyDEP2Or8C84DM9xxk1tX2Oi2xlfR0_9CkU',
  authDomain: 'full-shrek-messenger.firebaseapp.com',
  projectId: 'full-shrek-messenger',
  storageBucket: 'full-shrek-messenger.appspot.com',
  messagingSenderId: '394401023186',
  appId: '1:394401023186:web:d2c9a8a11cfa6391d6d90b',
  measurementId: '${config.measurementId}'
  }
  public app = initializeApp(this.config)
  constructor() { }
}
