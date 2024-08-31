import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nested-stepper-experience',
  templateUrl: './nested-stepper-experience.component.html',
  styleUrl: './nested-stepper-experience.component.css',
})
export class NestedStepperExperienceComponent {
  @Input() fields: {
    date: string;
    company: string;
    position: string;
    description: string;
  }[] = [];
  @Output() fieldsChange = new EventEmitter<
    { date: string; company: string; position: string; description: string }[]
  >();

  constructor() {
    this.addField();
  }

  addField() {
    this.fields.push({ date: '', company: '', position: '', description: '' });
    this.fieldsChange.emit(this.fields);
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
    this.fieldsChange.emit(this.fields);
  }
}
