import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagingComponent } from './messaging/messaging.component';



@NgModule({
  declarations: [
    ContactsComponent,
    MessagingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
