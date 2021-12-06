import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JoinsurveyComponent } from '../joinsurvey/joinsurvey.component';
import { NewSurveyComponent } from '../new-survey/new-survey.component';
import { AuthService } from '../_services/auth.service';
import { CustomDirectiveDirective } from 'src/libs/custom-directives/custom-directive.directive';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private modalService:NgbModal,private authService:AuthService) { }
  userId:number=this.authService.decodedToken?.nameid;
  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
  newSurvey(){
    const modalRef=this.modalService.open(NewSurveyComponent);
    modalRef.componentInstance.userId=this.userId;
  }
  joinSurvey(){
    const modalRef=this.modalService.open(JoinsurveyComponent);
    modalRef.componentInstance.userId=this.userId;
  }
}
