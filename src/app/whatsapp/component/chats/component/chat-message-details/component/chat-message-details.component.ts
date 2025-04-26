import { Component, Input, OnInit } from '@angular/core';
import { MessageServiceService } from '../../../../../../services/message-service.service';

@Component({
  selector: 'app-chat-message-details',
  templateUrl: './chat-message-details.component.html',
  styleUrl: './chat-message-details.component.css',
})
export class ChatMessageDetailsComponent implements OnInit {
  @Input() selectedMessage: any;

  constructor(private messageService: MessageServiceService) {}

  ngOnInit() {
    this.messageService.selectedMessage$.subscribe((message) => {
      this.selectedMessage = message;
    });
  }
}
