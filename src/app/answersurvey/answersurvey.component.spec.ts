import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersurveyComponent } from './answersurvey.component';

describe('AnswersurveyComponent', () => {
  let component: AnswersurveyComponent;
  let fixture: ComponentFixture<AnswersurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
