import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Surveys } from '../Models/Surveys';
import { UserAnswers } from '../Models/UserAnswers';
import { AuthService } from '../_services/auth.service';
import { SurveyService } from '../_services/survey.service';

@Component({
  selector: 'app-answersurvey',
  templateUrl: './answersurvey.component.html',
  styleUrls: []
})
export class AnswersurveyComponent implements OnInit {

  constructor(private activeRouter:ActivatedRoute,private surveyService:SurveyService,private authService:AuthService,private router:Router) { }
  code:number;
  survey:Surveys;
  userAnswers:UserAnswers=new UserAnswers;
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
    this.userAnswers.answersid=[];
    this.userAnswers.questionsid=[];
    this.userAnswers.userid=this.authService.decodedToken.nameid;
    let radio=document.getElementsByTagName("input");
    for(let i=0;i<radio.length;i++){
      if(radio[i].checked)
        {
          console.log(radio[i].id);
          console.log(radio[i].parentElement.parentElement.id);
          this.userAnswers.answersid.push(radio[i].id);
          this.userAnswers.questionsid.push(+radio[i].parentElement.parentElement.id);
        }
    }
    this.surveyService.answerSurvey(this.userAnswers).subscribe(next=>{
      console.log(next);
    });
    this.router.navigate(["/result",this.code]);
  }
}
