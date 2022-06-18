import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Surveys } from '../Models/Surveys';
import { SurveyService } from '../_services/survey.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  survey: Surveys;
  code: number;
  arr: any[];
  type;
  data: any[] = [];
  options;
  keys:string[]=[];
  values:string[]=[];
  constructor(private route: ActivatedRoute, private service: SurveyService) {}
  ngOnInit(): void {
    this.code = +this.route.snapshot.paramMap.get('code');
    this.getResult();
  }

  getResult() {
    this.service.getResult(this.code).subscribe((next) => {
      this.survey = next;
      this.getRatio();
    });
  }

  //cevap oranları bulunacak.
  getRatio() {
    for (let i = 0; i < this.survey.questions.length; i++) {
      let counts = {};
      this.survey.questions[i].userAnswers.forEach(function (x) {
        counts[x.answers] = (counts[x.answers] || 0) + 1;
      });
      console.log(counts);
       this.keys = Object.keys(counts);
       this.values = Object.values(counts);
      this.chart(this.keys, this.values);
    }
  }

  chart(keys, values) {
    this.type = 'pie';
    this.data.push({
      labels: keys,
      datasets: [
        {
          data: values,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
        },
      ],
    });
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
    };
  }
}
