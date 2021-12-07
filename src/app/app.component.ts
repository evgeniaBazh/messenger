import { Component } from '@angular/core';
import { Dialog } from './types/dialog.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'messenger';
  // TODO удалить после реализации взаимодействия с сервером
}
