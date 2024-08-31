import { Component, Input, ViewChild, ElementRef, input } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-result-a4',
  templateUrl: './result-a4.component.html',
  styleUrls: ['./result-a4.component.css'],
})
export class ResultA4Component {
  @Input() imageurl!: string | ArrayBuffer;
  @Input() fullname: string = '';
  @Input() role: string = '';
  @Input() phone: string = '';
  @Input() email: string = '';
  @Input() website: string = '';
  @Input() linked: string = '';
  @Input() address: string = '';
  @Input() educationFields: {
    date: string;
    diplome: string;
    university: string;
  }[] = [];
  @Input() languageFields: { name: string; percent: number }[] = [];
  @Input() profile: string = '';
  @Input() experienceFields: {
    date: string;
    company: string;
    position: string;
    description: string;
  }[] = [];
  @Input() hardSkillFields: { name: string; percent: number }[] = [];
  @Input() interestFields: { name: string }[] = [];
  @ViewChild('cvPreview') cvPreview!: ElementRef;

  captureCv(): Promise<string> {
    return html2canvas(this.cvPreview.nativeElement, { scale: 2 }).then(
      (canvas) => {
        return canvas.toDataURL('image/png');
      }
    );
  }
}
