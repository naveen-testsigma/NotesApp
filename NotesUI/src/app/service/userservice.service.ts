import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Authlogin} from "../types/authlogin";
import {Authsignup} from "../types/authsignup";
import {Observable} from "rxjs";
import {LoginComponent} from "../WebModule/login/login.component";
import {MainObject} from "../types/mainObject";

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
private getURL = "http://localhost:8080/get";
private putURL = "http://localhost:8080/user/add";
  constructor(private httpClient: HttpClient) { }


  getUser(username : string): Observable<Authlogin>{
    return this.httpClient.get<Authlogin>(`${this.getURL}`+`${username}`);
  }

  getIDuser(login: Authlogin){
    console.log(login);
    return this.httpClient.post("http://localhost:8080/user/check",login);
  }
  postUser(user: Authsignup) : Observable<Authsignup>
  {
    return this.httpClient.post<Authsignup>(this.putURL, user);
  }
}
