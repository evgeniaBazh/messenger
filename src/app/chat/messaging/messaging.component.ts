import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss'],
})
export class MessagingComponent implements OnInit {
  messages = [
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
  constructor() {}

  ngOnInit(): void {}
}
