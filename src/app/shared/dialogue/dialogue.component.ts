import { Component, Input, OnInit } from '@angular/core';
import { ChatData } from 'src/app/types/chat-data.interface';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
})
export class DialogueComponent implements OnInit {
  constructor() {}
  @Input() chat?: ChatData;
  ngOnInit(): void {}
}
