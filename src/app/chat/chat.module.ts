import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagingComponent } from './messaging/messaging.component';
import { Route, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { DialogueModule } from '../shared/dialogue/dialogue.module';
import { CurrentUserComponent } from './current-user/current-user.component';
import { AvatarModule } from '../shared/avatar/avatar.module';
import { ModalModule } from '../shared/modal/modal.module';
import { SettingsModalComponent } from '../shared/settings-modal/settings-modal.component';
import { MessageHeaderComponent } from './message-header/message-header.component';

const routes: Route[] = [
  {
    path: '',
    component: ChatComponent,
  },
];
@NgModule({
  declarations: [
    ContactsComponent,
    MessagingComponent,
    ChatComponent,
    SettingsModalComponent,
    CurrentUserComponent,
    MessageHeaderComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    RouterModule.forChild(routes),
    ModalModule,
    DialogueModule,
  ],
})
export class ChatModule {}
