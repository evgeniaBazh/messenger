import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { ChatData } from './types/dialog.interface';
import { UserData } from './types/user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  currentUserChats: Observable<ChatData[] | undefined> = new Observable<ChatData[] | undefined>();
  currentUser: Subject<UserData | undefined> = new Subject<UserData | undefined>();
  currentUserData: Observable<UserData | undefined> = new Observable<UserData | undefined>();

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.auth.authState.subscribe((user: any) => {
      this.currentUser.next(user);      
    })

    this.init();
  }

  init() {
    this.currentUser.asObservable().subscribe((user: UserData | undefined) => {
      if (!user) {
        throw new Error(`Не удалось получить данные пользователя ${user}`);
      }
      const userDoc = this.afs.doc<UserData>(`users/${user.userId}`);
      this.currentUserData = userDoc.valueChanges();
      this.currentUserData.subscribe((data: any) => {console.log(data)})
      this.currentUserChats = userDoc.collection<ChatData>('chats').valueChanges();
    })
  }

  getMessagesByChat() {
    //
  }
}