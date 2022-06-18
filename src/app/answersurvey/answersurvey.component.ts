import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Surveys } from '../Models/Surveys';
import { UserAnswers } from '../Models/UserAnswers';
import { AuthService } from '../_services/auth.service';
import { SignalrService } from '../_services/signalr.service';
import { SurveyService } from '../_services/survey.service';

@Component({
  selector: 'app-answersurvey',
  templateUrl: './answersurvey.component.html',
  styleUrls: ['./answersurvey.component.css'],
})
export class AnswersurveyComponent implements OnInit {
  constructor(
    private activeRouter: ActivatedRoute,
    private surveyService: SurveyService,
    private authService: AuthService,
    private router: Router,
    public signalRService: SignalrService
  ) {}
  text: string = "";
  code: number;
  survey: Surveys;
  userAnswers: UserAnswers = new UserAnswers();
  ngOnInit(): void {
    this.signalRService.connect();
    this.code = +this.activeRouter.snapshot.paramMap.get('code');
    this.getSurvey();
  }
  getSurvey() {
    this.surveyService.joinSurvey(this.code).subscribe((next) => {
      this.survey = next;
    });
  }
  submit() {
    this.userAnswers.answers = [];
    this.userAnswers.questionsid = [];
    this.userAnswers.userid=this.authService.decodedToken!=undefined?this.authService.decodedToken.nameid:999;
    let radio = document.getElementsByTagName('input');
    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        this.userAnswers.answers.push(radio[i].id);
        this.userAnswers.questionsid.push(
          +radio[i].parentElement.parentElement.id
        );
      }
    }
    this.surveyService.answerSurvey(this.userAnswers).subscribe((next) => {
      console.log(next);
    });
    this.router.navigate(['/result', this.code]);
  }
  sendMessage(): void {
    // this.signalRService.sendMessageToApi(this.text).subscribe({
    //   next: _ => this.text = '',
    //   error: (err) => console.error(err)
    // });

    this.signalRService.sendMessageToHub(this.text).subscribe({
      next: _ => this.text = '',
      error: (err) => console.error(err)
    });
  }
}
