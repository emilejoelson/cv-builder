import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolfaComponent } from './solfa.component';

describe('SolfaComponent', () => {
  let component: SolfaComponent;
  let fixture: ComponentFixture<SolfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolfaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
