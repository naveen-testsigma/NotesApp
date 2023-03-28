import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Authlogin} from "../types/authlogin";
import {Authsignup} from "../types/authsignup";
import {Observable} from "rxjs";

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
  postUser(user: Authsignup) : Observable<Object>
  {
    console.log("Reached here");
    console.log(user);  
    const userJson = JSON.stringify(user);
    return this.httpClient.post<Authsignup>(this.putURL, userJson);
  }
}
