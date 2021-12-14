import { Component, OnInit } from '@angular/core';
import { LoginData } from 'src/app/types/login-data.interface';
import { UserData } from 'src/app/types/user-data.interface';
import { LoginService, Tab, TabNames } from './login.service';

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

  getCurrentTab() {
    return this.loginService.getCurrentTab();
  }

  constructor(private loginService: LoginService) { }
  onTabClick(currentTab: TabNames) {
    this.loginService.setCurrentTab(currentTab);
  }
  sendLogin() {
    this.loginService.login(this.loginForm.email, this.loginForm.password);
  }

  sendLoginByEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendLogin();
    }
  }

  sendRegister() {
    this.loginService.register(this.registerForm);
  }

  sendRegisterByEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendRegister();
    }
  }

  ngOnInit(): void {}

}
