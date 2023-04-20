import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Notes} from "../types/notes";
import {LoginComponent} from "../WebModule/login/login.component";
import {Observable} from "rxjs";
import {Authlogin} from "../types/authlogin";
import {NotesComponent} from "../WebModule/notes/notes.component";
import {Search} from "../types/search";
import jwtDecode from "jwt-decode";
import jwt_decode from "jwt-decode";
import {JwtHelperService} from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private token:string = "Bearer "+ localStorage.getItem("user");
  private headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods','GET,POST,OPTIONS,DELETE,PUT')
    .set('Access-Control-Allow-Headers','*')
    .set('Authorization',this.token)
    ;

  private id : BigInt = 0n;

  gettheidboi(){
    const dorm = new JwtHelperService();
    // @ts-ignore
    const decoded = dorm.decodeToken(localStorage.getItem("user"));
    console.log("email" + " " + decoded.sub +" object here!")

    this.http.get<any>(`http://localhost:8080/user/${decoded.sub}`,{headers:this.headers}).subscribe(res=>{

      console.log("response form email " +res);
      this.id = res;
    });
    console.log("response form email outside" +this.id);
  }
  constructor(private http: HttpClient) {

  }


  private noteURL = "http://localhost:8080/notes/userid/";

  findALl() : Observable<Notes[]>{
    this.gettheidboi();
    console.log("findall Noteservice : "+ this.id )
    return this.http.get<Notes[]>( `${this.noteURL}${this.id}`,{headers:this.headers})
  }

  delete(id: string) : Observable<any> {
    console.log("delete here noteservie : "+ id);
    return this.http.delete(`http://localhost:8080/notes/delete/${id}`);
  }
  add(notes : Notes) : Observable<Object> {
    this.gettheidboi();
    console.log(notes);
    notes.userId = Number(this.id);
    console.log("user id :" +notes.userId);
    return this.http.post('http://localhost:8080/notes/post',notes,{headers:this.headers});
  }

  update(notes : Notes) : Observable<Object> {
   console.log(notes);
   notes.userId = Number(this.id);
  // @ts-ignore
    return this.http.post(`http://localhost:8080/notes/update/${notes.id}`,notes);
  }

  search(searcher : Search) : Observable<Notes[]>{
    console.log(searcher);
    searcher.userId = String(this.id);
    return this.http.post<Notes[]>('http://localhost:8080/notes/search',searcher);

  }
}
