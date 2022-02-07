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
  arr:any[];
  constructor(private route:ActivatedRoute,private service:SurveyService) { }

  ngOnInit(): void {
    this.code=+this.route.snapshot.paramMap.get('code');
    this.getResult();
  }

  getResult(){
    this.service.getResult(this.code).subscribe(next=>{
      console.log(next);
      this.survey=next;
      this.getRatio();
    });
  }

  //cevap oranları bulunacak.
  getRatio(){
    for (let i = 0; i < this.survey.questions.length; i++) {
      let counts = {};
    this.survey.questions[i].userAnswers.forEach(function (x) { counts[x.answers] = (counts[x.answers] || 0) + 1; });
    console.log(counts)
    }
  }

  toArray(){
    this.arr=this.survey.questions[0].userAnswers.map(x=>x.answers)
  }
}
