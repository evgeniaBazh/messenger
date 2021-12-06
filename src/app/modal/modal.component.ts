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

  @Output() isModalVisibleChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (event.key === 'Escape' && this.isModalVisible === true) {
      this.hide();
    }
  }

  show() {
    this.isModalVisible = true;
    this.isModalVisibleChange.emit(this.isModalVisible);
  }

  hide() {
    this.isModalVisible = false;
    this.isModalVisibleChange.emit(this.isModalVisible);
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  showModal() {}
}
