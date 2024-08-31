import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedStepperInterestComponent } from './nested-stepper-interest.component';

describe('NestedStepperInterestComponent', () => {
  let component: NestedStepperInterestComponent;
  let fixture: ComponentFixture<NestedStepperInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedStepperInterestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedStepperInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
