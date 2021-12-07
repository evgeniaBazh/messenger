import { Component, Input, OnInit } from '@angular/core';
import { Dialog } from 'src/app/types/dialog.interface';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
})
export class DialogueComponent implements OnInit {
  constructor() {}
  @Input() chat?: Dialog;
  ngOnInit(): void {}
}
