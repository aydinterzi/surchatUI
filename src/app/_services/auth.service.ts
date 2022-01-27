import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserForLoginDTO } from '../Models/DTO/UserForLoginDTO';
import {map} from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserForRegisterDTO } from '../Models/DTO/UserForRegisterDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string="https://surchatapi20220126192227.azurewebsites.net/api/user/";
  helper = new JwtHelperService();
  decodedToken:any;
  constructor(private http:HttpClient,private router:Router) { }

  login(model:UserForLoginDTO)
  {
    return this.http.post(this.baseUrl+"login",model).pipe(
      map((response:any)=>{
        const result=response;
        if(result){
          localStorage.setItem("token",result.token);
        }
      })
    );
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  register(user:UserForRegisterDTO){
    return this.http.post(this.baseUrl+"register",user);
  }

  loggedIn(){
    const token=localStorage.getItem("token");
    if(this.helper.isTokenExpired(token))
        localStorage.removeItem("token");
    return !this.helper.isTokenExpired(token);
  }
}
