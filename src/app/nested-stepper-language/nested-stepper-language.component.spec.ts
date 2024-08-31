import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedStepperLanguageComponent } from './nested-stepper-language.component';

describe('NestedStepperLanguageComponent', () => {
  let component: NestedStepperLanguageComponent;
  let fixture: ComponentFixture<NestedStepperLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedStepperLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedStepperLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
