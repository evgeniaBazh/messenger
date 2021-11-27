import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagingComponent } from './messaging/messaging.component';
import { Route, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

const routes: Route[] = [
  {
    path: '',
    component: ChatComponent,
  },
];
@NgModule({
  declarations: [ContactsComponent, MessagingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ChatModule {}
