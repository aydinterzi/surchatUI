import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-joinsurvey',
  templateUrl: './joinsurvey.component.html',
  styleUrls: ['./joinsurvey.component.css']
})
export class JoinsurveyComponent implements OnInit {
  @Input() userId:number;
  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  surveyForm=new FormGroup({
    code:new FormControl("")
  })
  closeModal(){
    this.activeModal.close();
  }
  joinSurvey(){

  }
}
