import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Surveys } from '../Models/Surveys';
import { SurveyService } from '../_services/survey.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  survey:Surveys;
  code:number;
  constructor(private route:ActivatedRoute,private service:SurveyService) { }

  ngOnInit(): void {
    this.code=+this.route.snapshot.paramMap.get('code');
    this.getResult();
  }

  getResult(){
    this.service.getResult(this.code).subscribe(next=>{
      console.log(next);
      this.survey=next;
    });
  }

  //cevap oranları bulunacak.
  getRatio(){

  }

}
