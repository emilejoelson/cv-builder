import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageServiceService {
  private selectedMessageSource = new BehaviorSubject<any>(null);
  selectedMessage$ = this.selectedMessageSource.asObservable();

  selectMessage(message: any) {
    this.selectedMessageSource.next(message);
  }
}
