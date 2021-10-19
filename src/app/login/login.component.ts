import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

  userForm=new FormGroup({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  });
  login()
  {
    console.log(this.userForm.value);
  }
  get username(){ return this.userForm.get('username');}
  get password(){ return this.userForm.get('password');}
}
