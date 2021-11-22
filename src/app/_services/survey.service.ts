import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyForCreateDTO } from '../Models/DTO/SurveyForCreateDTO';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http:HttpClient,private router:Router) { }
  baseUrl:string="https://localhost:44321/api/survey/";
  createSurvey(survey:SurveyForCreateDTO,id:number)
  {
    survey.userId=id;
    console.log("deneme");
    return this.http.post(this.baseUrl+"createsurvey",survey);
  }
}
