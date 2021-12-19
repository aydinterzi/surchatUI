import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Surveys } from '../Models/Surveys';
import { SurveyService } from '../_services/survey.service';

@Component({
  selector: 'app-answersurvey',
  templateUrl: './answersurvey.component.html',
  styleUrls: []
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
  submit(){
    let radio=document.getElementsByTagName("input");
    for(let i=0;i<radio.length;i++){
      if(radio[i].checked)
        {
          console.log(radio[i].id.substring(6,8));

        }
    }
  }
}
