import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService:AuthService,private http:HttpClient,private router:Router) {}
  helper = new JwtHelperService();
  ngOnInit(): void {
  }

  userForm=new FormGroup({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  });
  login(){
  this.authService.login(this.userForm.value).subscribe(next=>{
    const token=localStorage.getItem("token");
  if(token){
    this.authService.decodedToken=this.helper.decodeToken(token);
  }
    console.log("basarili");
  },error=>{
    console.log("login hatalı");
  })
}
  get username(){ return this.userForm.get('username');}
  get password(){ return this.userForm.get('password');}
}
