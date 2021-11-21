import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {

  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  closeModal(){
    this.activeModal.close();
  }

  createSurvey(){

  }
}
