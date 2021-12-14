import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule } from '@angular/router';
import { InputModule } from '../shared/input/input.module';
import { LoginService } from './login/login.service';

const routes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputModule,
  ],
  providers: [LoginService]
})
export class AuthModule {}
