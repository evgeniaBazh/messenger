import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { where } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { AppService } from '../app.service';
import { ChatData } from '../types/dialog.interface';

@Injectable()
export class ChatService {
  currentUserId: Subject<string> = new Subject<string>();
  currentUserChats: Observable<ChatData[]> | null = null;

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.auth.authState.subscribe((user: any) => {
      this.currentUserId.next(user.uid);      
    })
  }

  getCurrentUserChats() {
    this.currentUserId.asObservable().subscribe((id: string) => {
      const currentUser = this.afs.doc(`users/${id}`);
      console.log(currentUser);
      
      const userChats = this.afs.collection('chat')
    })
  }
  
}
