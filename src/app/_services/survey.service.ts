import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionForCreateDTO } from '../Models/DTO/QuestionForCreateDTO';
import { SurveyForCreateDTO } from '../Models/DTO/SurveyForCreateDTO';
import { SurveyForGetQuestions } from '../Models/DTO/SurveyForGetQuestions';
import { Surveys } from '../Models/Surveys';
import { UserAnswers } from '../Models/UserAnswers';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http:HttpClient,private router:Router,private service:AuthService) { }
  baseUrl:string="https://surchatapi20220126192227.azurewebsites.net/api/survey/";
  code:number;
  userId=this.service.decodedToken.nameid;
  createSurvey(survey:SurveyForCreateDTO,id:number)
  {
    survey.userId=id;
    survey.code=Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    this.code=survey.code;
    console.log("deneme");
    return this.http.post(this.baseUrl+"createsurvey",survey);
  }

  getSurveys():Observable<Surveys[]>{
    let params=new HttpParams();
    return this.http.get<Surveys[]>(this.baseUrl+this.userId);
  }

  createQuestion(question:QuestionForCreateDTO,code:number){
    question.code=code;
    return this.http.post(this.baseUrl+"createquestion",question);
  }

  joinSurvey(code:number):Observable<Surveys>{
    return this.http.get<Surveys>(this.baseUrl+"getsurvey/"+code);
  }

  answerSurvey(userAnswers:UserAnswers){
    return this.http.post(this.baseUrl+"answersurvey",userAnswers);
  }

  getResult(code: number):Observable<Surveys> {
    return this.http.get<Surveys>(this.baseUrl+"result/"+code);
  }
}
