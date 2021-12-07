import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ModalComponent } from './modal/modal.component';
import { DialogueComponent } from './dialogue/dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    DialogueComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
