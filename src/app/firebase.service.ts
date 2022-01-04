import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from 'firebase/auth';
import { DocumentReference } from 'firebase/firestore';
import { Observable, Subject } from 'rxjs';
import { ChatData } from './types/chat-data.interface';
import { UserData } from './types/user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  currentUserChats: Observable<ChatData[] | undefined> = new Observable<ChatData[] | undefined>();
  currentUser: Observable<User | null> = new Observable<User | null>();
  currentUserData: Observable<UserData | undefined> = new Observable<UserData | undefined>();

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.auth.authState.subscribe((user: any) => { // Ругается на тип данных, хотя приходит именно User | null
      this.init(user);
      this.currentUser = this.auth.authState as Observable<User | null>;
    });

    // ДЛЯ ТЕСТА, ПОТОМ УДАЛИТЬ
    (window as any).testChatCreating = (ids: any, name: any, ava: any) => {
      this.createChat(ids, name, ava);
    }; 
  }

  init(user: User | null) {
    if (!user) {
      throw new Error(`Не удалось получить данные пользователя ${user}`);
    }
    const ref = this.afs.doc<UserData>(`users/${user.uid}`);
    this.currentUserData = ref.valueChanges();
    this.currentUserChats = ref.collection<ChatData>('chats').valueChanges();
  }

  getMessagesByChat() {
    //
  }

  async createChat(userIds: string[], name: string = '', avatarUrl: string = '', isPrivate: boolean = false) {
    const userDocs: AngularFirestoreDocument<UserData>[] = userIds.map(userId => this.afs.doc<UserData>(`users/${userId}`));
    const chatData: ChatData = {
      users: userDocs.map(userDoc => userDoc.ref) as unknown[] as DocumentReference<UserData>[],
      messages: [],
      name,
      avatarUrl,
      isPrivate,
      unreadedMessagesCount: 0,
      status: null,
    };

    const ref = await this.afs.collection('chats').add(chatData)
    userDocs.forEach((userDoc: AngularFirestoreDocument<UserData>) => {
      userDoc.collection('chats').doc(ref.id).set(chatData);
    })
  }
}