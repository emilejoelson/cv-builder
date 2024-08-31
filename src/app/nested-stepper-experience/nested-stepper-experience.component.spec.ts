import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedStepperExperienceComponent } from './nested-stepper-experience.component';

describe('NestedStepperExperienceComponent', () => {
  let component: NestedStepperExperienceComponent;
  let fixture: ComponentFixture<NestedStepperExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedStepperExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedStepperExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
