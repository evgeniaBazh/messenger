import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from '../types/message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: Message[] = [
    {
      id: 1,
      user: {
        avatar:
          'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
        name: 'Polchikov',
        id: 34,
      },
      text: 'Hello,Обязательно гляну! Там наверное и сюжет ничего такой? Просто мне так нрав',
      time: new Date().toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
      }),
      isCurrentUser: true,
      img: 'https://www.pufikhomes.com/wp-content/uploads/2019/07/idealnyi-letniy-dom-v-kosta-brava-pufikhomes-1.jpg',
    },
    {
      id: 1,
      user: {
        avatar:
          'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
        name: 'Polchikov',
        id: 36,
      },
      text: 'Hello,Обязательно гляну! Там наверное и сюжет ничего такой? Просто мне так нрав',
      time: new Date().toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
      }),
      isCurrentUser: true,
      img: '',
    },
    {
      id: 1,
      user: {
        avatar: 'https://avatarko.ru/img/kartinka/19/muzhchina_18408.jpg',
        name: 'Sam',
        id: 35,
        lastVisitTime: new Date('12.08.2021 10:00'),
      },
      text: ``,
      time: new Date().toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
      }),
      isCurrentUser: false,
      img: 'https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/11/gubka-bob-1.jpg',
    },
  ];
  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.chatService.getCurrentUserChats();
  }
}
