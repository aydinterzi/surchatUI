import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionForCreateDTO } from '../Models/DTO/QuestionForCreateDTO';
import { SurveyForCreateDTO } from '../Models/DTO/SurveyForCreateDTO';
import { Surveys } from '../Models/DTO/Surveys';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor(private http:HttpClient,private router:Router,private service:AuthService) { }
  baseUrl:string="https://localhost:44321/api/survey/";
  code:number;
  createSurvey(survey:SurveyForCreateDTO,id:number)
  {
    survey.userId=id;
    survey.code=Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    this.code=survey.code;
    console.log("deneme");
    return this.http.post(this.baseUrl+"createsurvey",survey);
  }

  getSurveys():Observable<Surveys[]>{
    return this.http.get<Surveys[]>(this.baseUrl);
  }

  createQuestion(question:QuestionForCreateDTO,code:number){
    question.code=code;
    return this.http.post(this.baseUrl+"createquestion",question);
  }
}
