import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/types/user-data.interface';

@Component({
  selector: 'app-search-list-user',
  templateUrl: './search-list-user.component.html',
  styleUrls: ['./search-list-user.component.scss'],
})
export class SearchListUserComponent implements OnInit {
  constructor() {}
  @Input() chat?: UserData;
  ngOnInit(): void {}
}
