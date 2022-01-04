import { HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './_guards/auth_guard';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { ExistSurveysComponent } from './exist-surveys/exist-surveys.component';
import { JoinsurveyComponent } from './joinsurvey/joinsurvey.component';
import { SurveyComponent } from './survey/survey.component';
import { AnswersurveyComponent } from './answersurvey/answersurvey.component';
import { CustomDirectiveDirective } from 'src/libs/custom-directives/custom-directive.directive';
import { JwtModule } from '@auth0/angular-jwt';
import { ResultsComponent } from './results/results.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    NewSurveyComponent,
    ExistSurveysComponent,
    JoinsurveyComponent,
    SurveyComponent,
    AnswersurveyComponent,
    CustomDirectiveDirective,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44321"],
        disallowedRoutes: ["localhost:44321/api/user"],
      },
    }),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
