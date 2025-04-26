import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallSideBarComponent } from './call-side-bar.component';

describe('CallSideBarComponent', () => {
  let component: CallSideBarComponent;
  let fixture: ComponentFixture<CallSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
