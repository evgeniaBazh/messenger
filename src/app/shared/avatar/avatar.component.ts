import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() src = 'assets/img/avatar.png';
  @Input() size = '68px';
  @Input() status: 'online' | 'inactive' | null = null;
  @Input() editable: boolean = false;
  @Input() contentId?: string;
  fileReader: FileReader = new FileReader();
  constructor() {}

  onChooseAvatar(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.src = event.target.result;
      };
    }
  }

  ngOnInit(): void {}
}
