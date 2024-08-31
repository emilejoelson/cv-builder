import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedStepperHardSkillComponent } from './nested-stepper-hard-skill.component';

describe('NestedStepperHardSkillComponent', () => {
  let component: NestedStepperHardSkillComponent;
  let fixture: ComponentFixture<NestedStepperHardSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedStepperHardSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedStepperHardSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
