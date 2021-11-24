import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onChangeEvent(event: any){
    const tag=document.getElementById("deneme");
    const p=document.createElement("p");
    p.textContent="deneme";
    tag?.appendChild(p);
    console.log("denme");
  }
}
