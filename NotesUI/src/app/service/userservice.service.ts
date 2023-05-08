import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Authlogin} from "../models/authlogin";
import {Authsignup} from "../models/authsignup";
import {catchError, map, Observable, throwError} from "rxjs";
import {Notes} from "../models/notes";


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
private getURL = "http://localhost:8080/get";
  constructor(private httpClient: HttpClient) { }


  getUser(username : string): Observable<Authlogin>{
    return this.httpClient.get<Authlogin>(`${this.getURL}`+`${username}`).pipe(
      map(data=> {return new Authlogin().deserialize(data)},
      catchError(() => throwError('Problem while fetching ElementFilter'))
    ));
  }

  getIDuser(login: Authlogin){
    console.log(login);
    return this.httpClient.post("http://localhost:8080/authenticate",login.serialize());
  }
  postUser(user: Authsignup) : Observable<Authsignup>
  {
    return this.httpClient.post<Authsignup>("http://localhost:8080/register", user.serialize()).pipe(
      map(data=>{return new Authsignup().deserialize(data)},
      catchError(() => throwError('Problem while fetching ElementFilter'))
    ));
  }
}
