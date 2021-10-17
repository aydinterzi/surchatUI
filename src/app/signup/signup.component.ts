import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userForm=new FormGroup({
    username:new FormControl(""),
    email:new FormControl(""),
    password:new FormControl(""),
    confirmPassword:new FormControl("")
  });
  signUp(){
    console.log(this.userForm.value);
  }
}
