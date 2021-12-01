import { Component, OnInit } from '@angular/core';
import { Surveys } from '../Models/Surveys';
import { AuthService } from '../_services/auth.service';
import { SurveyService } from '../_services/survey.service';

@Component({
  selector: 'app-exist-surveys',
  templateUrl: './exist-surveys.component.html',
  styleUrls: ['./exist-surveys.component.css']
})
export class ExistSurveysComponent implements OnInit {

  constructor(private survey:SurveyService,private authService:AuthService) { }
  surveys:Surveys[];
  ngOnInit(): void {
  this.getSurveys();
  }
  getSurveys(){
    this.survey.getSurveys().subscribe(next=>{
     console.log(next);
     this.surveys=next;
    });

  }

}
