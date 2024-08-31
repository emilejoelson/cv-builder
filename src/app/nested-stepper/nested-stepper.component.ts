import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nested-stepper',
  templateUrl: './nested-stepper.component.html',
  styleUrls: ['./nested-stepper.component.css'],
})
export class NestedStepperComponent {
  @Input() fields: { date: string; diplome: string; university: string }[] = [];
  @Output() fieldsChange = new EventEmitter<
    { date: string; diplome: string; university: string }[]
  >();

  constructor() {
    this.addField();
  }

  addField() {
    this.fields.push({ date: '', diplome: '', university: '' });
    this.fieldsChange.emit(this.fields);
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
    this.fieldsChange.emit(this.fields);
  }
}
