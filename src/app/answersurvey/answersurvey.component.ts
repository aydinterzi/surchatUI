import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Surveys } from '../Models/Surveys';
import { SurveyService } from '../_services/survey.service';

@Component({
  selector: 'app-answersurvey',
  templateUrl: './answersurvey.component.html',
  styleUrls: ['./answersurvey.component.css']
})
export class AnswersurveyComponent implements OnInit {

  constructor(private activeRouter:ActivatedRoute,private surveyService:SurveyService) { }
  code:number;
  survey:Surveys;
  ngOnInit(): void {
    this.code=+this.activeRouter.snapshot.paramMap.get('code');
    this.getSurvey();
  }
  getSurvey()
  {
    this.surveyService.joinSurvey(this.code).subscribe(next=>{
      this.survey=next;
    })
  }
}
