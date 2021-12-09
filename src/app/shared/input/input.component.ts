import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputTypes } from 'src/app/types/input-types.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  get types(): typeof InputTypes {
    return InputTypes;
  }
  constructor() { }
  @Input()
  contentClass: string = '';

  @Input()
  type: string = InputTypes.text;

  @Input()
  autocomplete: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  name: string = '';

  // Эмуляция ngModel
  @Input('ngModel')
  public model: string = ''

  @Output('ngModelChanged')
  public modelChanged: EventEmitter<string> = new EventEmitter();

  visibility: boolean = false;
  focused: boolean = false;

  get currentType(): InputTypes {
    if (this.type !== InputTypes.password) {
      return InputTypes[this.type as InputTypes];
    }
    return this.visibility ? InputTypes.text : InputTypes.password;
  }


  ngOnInit(): void {
  }

}
