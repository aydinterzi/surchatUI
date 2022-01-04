import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersurveyComponent } from './answersurvey/answersurvey.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';
import { SignupComponent } from './signup/signup.component';
import { SurveyComponent } from './survey/survey.component';
import { AuthGuard } from './_guards/auth_guard';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"surveys/:code",component:SurveyComponent,canActivate:[AuthGuard]},
  {path:"answer/:code",component:AnswersurveyComponent,canActivate:[AuthGuard]},
  {path:"result/:code",component:ResultsComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
