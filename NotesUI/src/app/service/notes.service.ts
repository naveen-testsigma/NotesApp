import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Notes} from "../types/notes";
import {LoginComponent} from "../WebModule/login/login.component";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  // @ts-ignore
  constructor(private http: HttpClient,private login:LoginComponent) {

  }

  private noteURL = "http://localhost:8080/notes/userId/";
  findALl() : Observable<Notes>{
    return this.http.get<Notes>( `${this.noteURL}${this.login.userIDsender()}`)
  }
}
