import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersurveyComponent } from './answersurvey/answersurvey.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"surveys/:code",component:SurveyComponent},
  {path:"answer/:code",component:AnswersurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
