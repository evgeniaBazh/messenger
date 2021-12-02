import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
})
export class DialogueComponent implements OnInit {
  constructor() {}
  @Input() chat: any;
  ngOnInit(): void {}
}
