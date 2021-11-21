import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewSurveyComponent } from '../new-survey/new-survey.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private modalService:NgbModal) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
  newSurvey(){
    const modalRef=this.modalService.open(NewSurveyComponent);
  }
}
