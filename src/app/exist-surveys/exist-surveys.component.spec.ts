import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistSurveysComponent } from './exist-surveys.component';

describe('ExistSurveysComponent', () => {
  let component: ExistSurveysComponent;
  let fixture: ComponentFixture<ExistSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
