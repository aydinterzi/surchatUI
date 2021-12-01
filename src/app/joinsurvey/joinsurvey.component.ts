import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SurveyForGetQuestions } from '../Models/DTO/SurveyForGetQuestions';
import { Surveys } from '../Models/Surveys';
import { SurveyService } from '../_services/survey.service';

@Component({
  selector: 'app-joinsurvey',
  templateUrl: './joinsurvey.component.html',
  styleUrls: ['./joinsurvey.component.css']
})
export class JoinsurveyComponent implements OnInit {
  @Input() userId:number;
  constructor(private activeModal:NgbActiveModal,private surveyService:SurveyService,private router:Router) { }
  survey:Surveys;
  ngOnInit(): void {
  }
  surveyForm=new FormGroup({
    code:new FormControl("")
  })
  closeModal(){
    this.activeModal.close();
  }
  joinSurvey(){
  this.surveyService.joinSurvey(this.code.value).subscribe(next=>{
    this.survey=next;
    this.router.navigate(["/answer/"+this.survey.code]);
    this.activeModal.close();
  console.log(next);
});
  }

  get code(){return this.surveyForm.get('code')};
}
