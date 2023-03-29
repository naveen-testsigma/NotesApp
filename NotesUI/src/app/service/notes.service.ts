import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Notes} from "../types/notes";
import {LoginComponent} from "../WebModule/login/login.component";
import {Observable} from "rxjs";
import {Authlogin} from "../types/authlogin";
import {NotesComponent} from "../WebModule/notes/notes.component";
import {Search} from "../types/search";


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  // @ts-ignore
  constructor(private http: HttpClient,private login:LoginComponent) {

  }

  private noteURL = "http://localhost:8080/notes/userid/";

  findALl() : Observable<Notes[]>{
    console.log("findall Noteservice : "+localStorage.getItem("user"))
    return this.http.get<Notes[]>( `${this.noteURL}${localStorage.getItem("user")}`)
  }

  delete(id: string) {
    console.log("delete here noteservie : "+ id);
    return this.http.delete(`http://localhost:8080/notes/delete/${id}`);
  }
  add(notes : Notes) : Observable<Object> {
    console.log(notes);
    return this.http.post('http://localhost:8080/notes/post',notes);
  }

  update(notes : Notes) : Observable<Object> {
   console.log(notes);
  // @ts-ignore
    return this.http.post(`http://localhost:8080/notes/update/${notes.id}`,notes);
  }

  search(searcher : Search) : Observable<Notes[]>{

    return this.http.post<Notes[]>('http://localhost:8080/notes/search',searcher);

  }
}
