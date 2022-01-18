import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup,FormBuilder, FormArray } from '@angular/forms';
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
  constructor(private fb:FormBuilder,private surveyService:SurveyService,private route:ActivatedRoute,private alertify:AlertifyService) {
    this.createSurveyForm();
   }
  code:number;
  questionsPreview:QuestionForCreateDTO[]=[];
  questionForm:FormGroup;
  ngOnInit(): void {
    this.code=+this.route.snapshot.paramMap.get('code');
  }
  createSurveyForm(){
    this.questionForm=this.fb.group({
      question:'',
      options:this.fb.array([]),
    });
  }

  get options():FormArray{
    return this.questionForm.get("options") as FormArray;
  }

  newOption():FormGroup{
    return this.fb.group({
      option:''
    })
  }

  addOptions(){
    this.options.push(this.newOption());
  }

  removeOption(i:number){
    this.options.removeAt(i);
  }


  // questionForm=new FormGroup({
  //   question:new FormControl(""),
  //   option1:new FormControl(""),
  //   option2:new FormControl(""),
  //   option3:new FormControl(""),
  //   option4:new FormControl("")
  // });
  createQuestion(){
    console.log(this.questionForm.value);
     this.questionsPreview.push(this.questionForm.value);
    this.surveyService.createQuestion(this.questionForm.value,this.code).subscribe(next=>{
      this.alertify.success("Soru eklendi!!");
      console.log(next);
    })


  }

  get question(){return this.questionForm.get('question')};

}
