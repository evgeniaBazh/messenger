import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/types/login-data.interface';
import { UserData } from 'src/app/types/user-data.interface';
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
  loginForm: LoginData = {
    email: '',
    password: '',
  }
  registerForm: UserData = {
    name: '',
    email: '',
    password: '',
    phone: '',
  }
  confirmPassword: string = '';
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

  sendRegister() {
    this.authService.register(this.registerForm);
  }

  sendRegisterByEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendRegister();
    }
  }

  ngOnInit(): void {}

}
