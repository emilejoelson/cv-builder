import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-result-a4',
  templateUrl: './result-a4.component.html',
  styleUrls: ['./result-a4.component.css']
})
export class ResultA4Component {
  @Input() cvContent: string = '';
  @ViewChild('cvPreview') cvPreview!: ElementRef;

  captureCv(): Promise<string> {
    return html2canvas(this.cvPreview.nativeElement, { scale: 2 }).then(canvas => {
      return canvas.toDataURL('image/png');
    });
  }
}
