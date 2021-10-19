import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    username:new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
    confirmPassword:new FormControl("",[Validators.required])
  });
  signUp(){
    console.log(this.userForm.value);
  }
  get username(){return this.userForm.get('username');}
  get password(){return this.userForm.get('password');}
  get confirmPassword(){return this.userForm.get('confirmPassword');}
  get email(){return this.userForm.get('email');}
}
