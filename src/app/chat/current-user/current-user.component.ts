import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss'],
})
export class CurrentUserComponent implements OnInit {
  constructor() {}
  isSettingsVisible: boolean = false;
  ngOnInit(): void {}
}
