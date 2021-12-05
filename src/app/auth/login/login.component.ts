import { Component, OnInit } from '@angular/core';

enum TabNames {
  LOGIN,
  REGISTER,
}

interface Tab {
  label: string;
  name: TabNames;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tabs: Array<Tab> = [
    {
      label: 'Войти',
      name: TabNames.LOGIN
    },
    {
      label: 'Зарегистрироваться',
      name: TabNames.REGISTER,
    }
  ]
  currentTab: TabNames = TabNames.LOGIN;
  get tabNames(): typeof TabNames {
    return TabNames;    
  }

  constructor() { }
  onTabClick(currentTab: TabNames) {
    this.currentTab = currentTab
  }
  ngOnInit(): void {
  }

}
