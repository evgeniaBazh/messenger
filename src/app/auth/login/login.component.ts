import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
  loginForm = {
    email: '',
    password: '',
  }
  get tabNames(): typeof TabNames {
    return TabNames;    
  }

  constructor(private authService: AuthService, private router: Router) { }
  onTabClick(currentTab: TabNames) {
    this.currentTab = currentTab
  }
  sendLogin() {
    this.authService.login(this.loginForm.email, this.loginForm.password);
  }

  sendLoginByEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendLogin();
    }
  }
  ngOnInit(): void {}

}
