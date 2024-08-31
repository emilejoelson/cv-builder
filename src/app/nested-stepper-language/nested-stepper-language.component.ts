import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nested-stepper-language',
  templateUrl: './nested-stepper-language.component.html',
  styleUrl: './nested-stepper-language.component.css'
})
export class NestedStepperLanguageComponent {
  @Input() fields: { name: string; percent: number }[] = [];
  @Output() fieldsChange = new EventEmitter<{ name: string; percent: number }[]>();

  constructor() {
    this.addField();
  }

  addField() {
    this.fields.push({ name: '', percent: 0 });
    this.fieldsChange.emit(this.fields);
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
    this.fieldsChange.emit(this.fields);
  }
}
