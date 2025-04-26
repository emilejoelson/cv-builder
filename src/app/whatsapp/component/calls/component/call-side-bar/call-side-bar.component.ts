import { Component } from '@angular/core';

@Component({
  selector: 'app-call-side-bar',
  templateUrl: './call-side-bar.component.html',
  styleUrl: './call-side-bar.component.css',
})
export class CallSideBarComponent {
  calls = [
    {
      number: '+212 622-455322',
      username: '~Mendrika',
      state: 'Missed',
      date: '10/18/2024',
      details: [
        {
          detail: 'Missed voice call at 8:04 AM',
          substate: 'Unanswered',
        },
      ],
    },
    {
      number: '+212 667-672656',
      username: '~~Mirindra~~',
      state: 'Outgoing',
      date: '10/14/2024',
      details: [
        {
          detail: 'Missed voice call at   2:04 PM',
          substate: 'Unanswered',
        },
        {
          detail: 'Missed voice call at 12:04 PM',
          substate: 'Unanswered',
        },
        {
          detail: 'Missed voice call at 11:04 PM',
          substate: 'Unanswered',
        },
      ],
    },
  ];
}
