import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultA4Component } from './result-a4.component';

describe('ResultA4Component', () => {
  let component: ResultA4Component;
  let fixture: ComponentFixture<ResultA4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultA4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultA4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
