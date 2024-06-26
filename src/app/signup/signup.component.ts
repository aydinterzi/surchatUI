import { AlertifyService } from './../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router,private alertify:AlertifyService) {}

  ngOnInit(): void {}
  userForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ])
  });
  signUp() {
    this.authService.register(this.userForm.value).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.alertify.error('Kullanıcı adı veya şifre yanlış');
      }
    );
  }
  get username() {
    return this.userForm.get('username');
  }
  get password() {
    return this.userForm.get('password');
  }
 
  get email() {
    return this.userForm.get('email');
  }
}
