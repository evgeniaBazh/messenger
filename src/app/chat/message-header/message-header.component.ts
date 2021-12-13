import { Component, Input, OnInit } from '@angular/core';
import { DateService } from 'src/app/shared/date.service';
import { Message } from '../types/message.interface';

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.scss'],
})
export class MessageHeaderComponent implements OnInit {
  @Input() messages?: Message[];

  getLastMessage() {
    if (this.messages) {
      const message = this.messages[this.messages.length - 1];
      return message;
    }
    return null;
  }

  getTime(): string {
    if (this.getLastMessage()) {
      const message = this.getLastMessage();

      return this.dateService.getFormatedRelativeDate(
        message?.user.lastVisitTime
      );
    }

    return '';
  }

  constructor(private dateService: DateService) {}

  ngOnInit(): void {}
}
