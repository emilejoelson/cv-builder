import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageServiceService } from '../../../../../services/message-service.service';
import { M } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-chat-side-bar',
  templateUrl: './chat-side-bar.component.html',
  styleUrl: './chat-side-bar.component.css',
})
export class ChatSideBarComponent {
  messages = [
    {
      number: '+212 695-482207',
      lastMessage: 'How about your family?',
      date: '10/14/2024',
      mpAccount: '1',
      allMessages: [
        {
          sender: 'Person 01',
          content: [
            {
              message:
                'Hi,I think you are in a good condition. I tell you the truth. Yes , I know you. What is the problem about you and your ex? ',
            },
          ],
        },
        {
          sender: 'Person 02',
          content: [
            {
              message:
                'Hello,Yes I know but I try to do this immediately.I think you are in a good condition. Hi,I think you are in a good condition. I tell you the truth. Yes , I know you. What is the problem about you and your ex?I tell you the truth. Yes , I know you. What is the problem about you and your ex?',
            },
          ],
        },
        {
          sender: 'Person 01',
          content: [
            {
              message: 'How are you ?',
            },
            {
              message: 'How are you doing?',
            },
          ],
        },
        {
          sender: 'Person 02',
          content: [
            {
              message:
                'FineHi,I think you are in a good condition. I tell you the truth. Yes , I know you. What is the problem about you and your ex?Hi,I think you are in a good condition. I tell you the truth. Yes , I know you. What is the problem about you and your ex?',
            },
          ],
        },
        {
          sender: 'Person 01',
          content: [{ message: 'How about your family?' }],
        },
      ],
    },
    {
      number: '+212 600-000000',
      lastMessage: 'I will call you later',
      date: '10/12/2024',
      mpAccount: '3',
      allMessages: [
        { sender: 'Person 01', content: [{ message: 'Hi' }] },
        { sender: 'Person 02', content: [{ message: 'Are you there?' }] },
        { sender: 'Person 01', content: [{ message: 'Yes' }] },
        {
          sender: 'Person 02',
          content: [{ message: 'I will call you later' }],
        },
      ],
    },
    {
      number: '+212 600-000001',
      lastMessage: 'Tell me the truth ',
      date: '10/12/2024',
      mpAccount: '3',
      allMessages: [
        { sender: 'Person 01', content: [{ message: 'Hi' }] },
        { sender: 'Person 02', content: [{ message: 'Are you there?' }] },
        { sender: 'Person 01', content: [{ message: 'Tell me the truth' }] },
        {
          sender: 'Person 02',
          content: [{ message: 'I will call you later' }],
        },
      ],
    },
    {
      number: '+212 600-000000',
      lastMessage: 'No no no no no !!! ',
      date: '10/12/2024',
      mpAccount: '3',
      allMessages: [
        { sender: 'Person 01', content: [{ message: 'Hi' }] },
        { sender: 'Person 02', content: [{ message: 'Are you there?' }] },
        { sender: 'Person 01', content: [{ message: 'No no no no no !!!' }] },
        {
          sender: 'Person 02',
          content: [{ message: 'I will call you later' }],
        },
      ],
    },
    {
      number: '+212 601-000020',
      lastMessage: 'It is not possible',
      date: '10/12/2024',
      mpAccount: '13',
      allMessages: [
        { sender: 'Person 01', content: [{ message: 'Hi' }] },
        { sender: 'Person 02', content: [{ message: 'Are you there?' }] },
        { sender: 'Person 01', content: [{ message: 'It is not possible' }] },
        {
          sender: 'Person 02',
          content: [{ message: 'I will call you later' }],
        },
      ],
    },
  ];

  constructor(private messageService: MessageServiceService) {}

  // Trigger the service to select the message
  selectMessage(message: any) {
    this.messageService.selectMessage(message);
  }
}
