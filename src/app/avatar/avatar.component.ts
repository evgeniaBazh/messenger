import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() src = 'assets/img/avatar.png';
  @Input() size = '68px';

  constructor() {}

  ngOnInit(): void {}
}
