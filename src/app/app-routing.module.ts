import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedOutGuard } from './guards/logged-out.guard';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canLoad: [LoggedOutGuard],
  },
  {
    path: '',
    loadChildren: () => import('./chat/chat.module').then((m) => m.ChatModule),
    canLoad: [LoggedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
