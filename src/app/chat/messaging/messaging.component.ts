import { Component, Input, OnInit } from '@angular/core';
import { UIMessage } from '../types/message.interface';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss'],
})
export class MessagingComponent implements OnInit {
  constructor() {}
  @Input() messages?: UIMessage[];
  ngOnInit(): void {}
}
