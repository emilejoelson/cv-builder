import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrl: './cv-form.component.css'
})
export class CvFormComponent {
  cvContent = '';

  @Output() contentChange = new EventEmitter<string>();

  onContentChange() {
    this.contentChange.emit(this.cvContent);
  }
}
