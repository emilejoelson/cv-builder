import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageDetailsComponent } from './chat-message-details.component';

describe('ChatMessageDetailsComponent', () => {
  let component: ChatMessageDetailsComponent;
  let fixture: ComponentFixture<ChatMessageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatMessageDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatMessageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
