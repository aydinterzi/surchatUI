import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinsurveyComponent } from './joinsurvey.component';

describe('JoinsurveyComponent', () => {
  let component: JoinsurveyComponent;
  let fixture: ComponentFixture<JoinsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinsurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
