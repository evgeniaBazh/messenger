import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() isModalVisible: boolean = false;

  @Output() isModalChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (event.key === 'Escape' && this.isModalVisible === true) {
      this.isModalVisible = false;
    }
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  showModal() {}
}
