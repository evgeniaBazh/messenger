import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'messenger';
  chats: any[] = [
    {
      name: 'Name',
      avatarSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICOKwFLUwWWcvv3xUQGoSbl_JdwPAKylAoQ&usqp=CAU',
      lastMessage: 'Hello!',
      clock: '12:00',
      counterMail: 1,
    },
    {
      name: 'Persik',
      avatarSrc:
        'https://media.istockphoto.com/vectors/cute-cartoon-cat-icon-vector-illustration-vector-id1171786505?k=20&m=1171786505&s=170667a&w=0&h=vozvrIObc_LErhOGtThRnuMa2lQjhfmVh2XO4Q2z5hM=',
      lastMessage:
        'How are you? Ornare non orci, platea consectetur dictum et pellentesque non!',
      clock: '06:32',
      counterMail: 0,
    },
  ];
}
