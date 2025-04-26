import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallServiceService {
  private selectedCallSource = new BehaviorSubject<any>(null);
  selectedCall$ = this.selectedCallSource.asObservable();

  selectCall(call: any) {
    this.selectedCallSource.next(call);
  }
}
