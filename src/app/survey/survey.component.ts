import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../_services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  constructor(private surveyService:SurveyService,private route:ActivatedRoute) { }
  code:number;
  ngOnInit(): void {
    this.code=+this.route.snapshot.paramMap.get('code');
  }
  questionForm=new FormGroup({
    question:new FormControl(""),
    option:new FormControl("")
  });
  createQuestion(){
    console.log(this.questionForm.value);
    this.surveyService.createQuestion(this.questionForm.value,this.code).subscribe(next=>
      console.log(next));
  }
}
