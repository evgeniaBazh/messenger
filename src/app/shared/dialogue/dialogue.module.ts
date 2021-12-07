import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogueComponent } from './dialogue.component';
import { AvatarModule } from '../avatar/avatar.module';

@NgModule({
  declarations: [DialogueComponent],
  imports: [CommonModule, AvatarModule],
  exports: [DialogueComponent],
})
export class DialogueModule {}
