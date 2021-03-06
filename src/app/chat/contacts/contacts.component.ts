import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/firebase.service';
import { ChatData } from 'src/app/types/chat-data.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {}
  get chats(): Observable<ChatData[] | undefined> {
    return this.firebaseService.currentUserChats;
  }
  contacts: ChatData[] = [
    // {
    //   avatarSrc:
    //     'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
    //   time: '12:30',
    //   name: 'Persik',
    //   lastMessage: {
    //     text: 'hello'
    //   },
    //   unreadedMessagesCount: 2,
    //   status: 'inactive',
    // },
    // {
    //   avatarSrc:
    //     'data:image/jpeg;base64,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',
    //   time: '08:33',
    //   name: '????????',
    //   lastMessage: '????????????, ?????????????????? ??????????????? ?????????? ?????? ?????????????????? ????????????.',
    //   unreadedMessagesCount: 0,
    //   status: null,
    // },
    // {
    //   avatarSrc:
    //     'http://srcb.oboi.ws/wallpapers/big_8740_oboi_gregori_haus.jpg',
    //   time: '17:06',
    //   name: '????????',
    //   lastMessage: '?????????? ?????????? ???????????????????? ?? ???????? ;)',
    //   unreadedMessagesCount: 1,
    //   status: 'online',
    // },
  ];
}
