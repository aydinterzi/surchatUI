import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Surveys } from '../Models/Surveys';
import { NewSurveyComponent } from '../new-survey/new-survey.component';
import { AuthService } from '../_services/auth.service';
import { SurveyService } from '../_services/survey.service';

@Component({
  selector: 'app-exist-surveys',
  templateUrl: './exist-surveys.component.html',
  styleUrls: ['./exist-surveys.component.css'],
})
export class ExistSurveysComponent implements OnInit {
  constructor(
    private survey: SurveyService,
    private authService: AuthService,
    private modalService: NgbModal,
  ) {}
  url:string="localhost:4200/answer/";
  surveys: Surveys[]=[];
  userId: number = this.authService.decodedToken?.nameid;
  ngOnInit(): void {
    this.getSurveys();
  }
  getSurveys() {
    this.survey.getSurveys().subscribe((next) => {
      this.surveys = next;
    });
  }

  newSurvey() {
    const modalRef = this.modalService.open(NewSurveyComponent);
    modalRef.componentInstance.userId = this.userId;
  }

  deleteSurvey(surveyCode:number){
    this.survey.deleteSurvey(surveyCode).subscribe(()=>{
      this.getSurveys();
    })
  }
}
