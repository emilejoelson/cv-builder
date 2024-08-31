import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nested-stepper-interest',
  templateUrl: './nested-stepper-interest.component.html',
  styleUrl: './nested-stepper-interest.component.css',
})
export class NestedStepperInterestComponent {
  @Input() fields: { name: string }[] = [];
  @Output() fieldsChange = new EventEmitter<{ name: string }[]>();

  constructor() {
    this.addField();
  }

  addField() {
    this.fields.push({ name: '' });
    this.fieldsChange.emit(this.fields);
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
    this.fieldsChange.emit(this.fields);
  }
}
