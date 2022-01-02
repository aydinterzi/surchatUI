import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionForCreateDTO } from '../Models/DTO/QuestionForCreateDTO';
import { AlertifyService } from '../_services/alertify.service';
import { SurveyService } from '../_services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: []
})
export class SurveyComponent implements OnInit {
  constructor(private surveyService:SurveyService,private route:ActivatedRoute,private alertify:AlertifyService) { }
  code:number;
  questionsPreview:QuestionForCreateDTO[]=[];
  ngOnInit(): void {
    this.code=+this.route.snapshot.paramMap.get('code');
  }
  questionForm=new FormGroup({
    question:new FormControl(""),
    option1:new FormControl(""),
    option2:new FormControl(""),
    option3:new FormControl(""),
    option4:new FormControl("")
  });
  createQuestion(){
    console.log(this.questionForm.value);
     this.questionsPreview.push(this.questionForm.value);
    this.surveyService.createQuestion(this.questionForm.value,this.code).subscribe(next=>{
      this.alertify.success("Soru eklendi!!");
      console.log(next);
    })


  }

  get question(){return this.questionForm.get('question')};
  get option1(){return this.questionForm.get('option1')};
  get option2(){return this.questionForm.get('option2')};
  get option3(){return this.questionForm.get('option3')};
  get option4(){return this.questionForm.get('option4')};

}
