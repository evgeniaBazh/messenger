import { Component, Input, OnInit } from '@angular/core';
import { Timestamp } from 'firebase/firestore';
import { DateService } from 'src/app/shared/date.service';
import { UIMessage } from '../types/message.interface';

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.scss'],
})
export class MessageHeaderComponent implements OnInit {
  @Input() messages?: UIMessage[];

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
      const date = (message?.user.lastVisitTime as Timestamp).toDate();
      return this.dateService.getFormatedRelativeDate(
        date,
      );
    }

    return '';
  }

  constructor(private dateService: DateService) {}

  ngOnInit(): void {}
}
