import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from 'firebase/auth';
import { DocumentData, DocumentReference, Timestamp } from 'firebase/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message, UIMessage } from './chat/types/message.interface';
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
      // <!--ДЛЯ ТЕСТА, ПОТОМ УДАЛИТЬ
      this.currentUserData.subscribe((user: UserData | undefined) => {
        (window as any).send = (text: string, images: string[]) => {
          if (user) {
            this.sendMessageToChat('Lth8poISvv5ToF8PHvTC', user, text, images)
          }
        }
      })
      // ДЛЯ ТЕСТА, ПОТОМ УДАЛИТЬ -->
    });

    // ДЛЯ ТЕСТА, ПОТОМ УДАЛИТЬ
    (window as any).testChatCreating = (ids: any, name: any, ava: any) => {
      this.createChat(ids, name, ava);
    };
    this.getMessagesFromChat('Lth8poISvv5ToF8PHvTC').subscribe();
  }

  init(user: User | null) {
    if (!user) {
      throw new Error(`Не удалось получить данные пользователя ${user}`);
    }
    const ref = this.afs.doc<UserData>(`users/${user.uid}`);
    this.currentUserData = ref.valueChanges();
    this.currentUserChats = ref.collection<ChatData>('chats').valueChanges();
  }

  /**
   * Отправка сообщения в чат по id
   * @param chatId id чата в который нужно отправить сообщение
   * @param author Автор сообщения
   */
  async sendMessageToChat(chatId: string, author: UserData, text?: string, images?: string[]) {
    if (!text && !images?.length) {
      throw new Error('Сообщение должно содержать хотя бы текст, либо изображения, либо и то и другое');
    }
    const chatDoc = this.afs.doc(`chats/${chatId}`);
    const messageData: Message = {
      time: Timestamp.now(),
      user: this.afs.doc(`users/${author.userId}`).ref as any, // Используется UserData, однако при создании сообщения передаём ref
      text: text || '',
      images: [],
    }
    const ref = await chatDoc.collection('messages').add(messageData);
    ref.update({messageId: ref.id});
  }

  /**
   * Получить список сообщений из чата по id чата
   */
  getMessagesFromChat(chatId: string): Observable<UIMessage[]> {
    const chatDoc = this.afs.doc(`chats/${chatId}`);
    return chatDoc.collection('messages').valueChanges().pipe(
      map((messages: DocumentData[]) => {
        console.log(messages);
        
        return messages as unknown as UIMessage[];
      })
    )
  }

  /**
   * Создания чата из id пользователей, с привязкой к пользователям
   * @param userIds Идентификаторы пользователей, с которыми создаётся чат
   * @param name Название чата (используется для созданных вручную чатов, конференций)
   * @param avatarUrl Ссылка на аватарку конфереции
   * @param isPrivate Является ли чат частной беседой (иначе это конференция)
   */
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
    ref.update({chatId: ref.id});
  }
}