import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../shared/input/input.module';

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
    ReactiveFormsModule,
    InputModule,
  ],
})
export class AuthModule {}
