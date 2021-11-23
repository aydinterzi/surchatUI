import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SurveyForCreateDTO } from '../Models/DTO/SurveyForCreateDTO';
import { Surveys } from '../Models/DTO/Surveys';

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

  getSurveys():Observable<Surveys[]>{
    return this.http.get<Surveys[]>(this.baseUrl);
  }
}
