import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../_services/auth.service';
import { SurveyService } from '../_services/survey.service';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {
  @Input() userId:number;
  constructor(private activeModal:NgbActiveModal,private http:HttpClient,private surveyService:SurveyService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  surveyForm=new FormGroup({
    Title:new FormControl(""),
    Time:new FormControl("")
  });
  closeModal(){
    this.activeModal.close();
  }

  createSurvey(){
    this.surveyService.createSurvey(this.surveyForm.value,this.authService.decodedToken?.nameid).subscribe(next=>{
      console.log("next");
      this.router.navigate(["/surveys",this.surveyService.code]);
      this.activeModal.close();
    });
  }
}
