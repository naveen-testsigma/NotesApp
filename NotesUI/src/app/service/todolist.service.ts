import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Notes} from "../types/notes";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Todolist} from "../types/todolist";
import {JwtDecodeOptions} from "jwt-decode";
import jwt_decode from 'jwt-decode';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private  dorm = new JwtHelperService();
  // @ts-ignore
  private  decoded = this.dorm.decodeToken(localStorage.getItem("user"));
  private token:string = "Bearer "+ localStorage.getItem("user");

  private headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods','*')
    .set('Access-Control-Allow-Headers','*')
    .set('Authorization',this.token)
  ;
  constructor(private http: HttpClient)  {
  }

  findAll(id : BigInt) : Observable<Todolist[]>{

    return this.http.get<Todolist[]>( `http://localhost:8080/todolist/getsearch?query=id:${id}`,{headers:this.headers});

  }

  delete(id : string) :Observable<any>{
    return this.http.delete(`http://localhost:8080/todolist/delete/${id}`,{headers:this.headers});
  }

  update(todoUpdate : Todolist) : Observable<Object>{
    console.log("todoUpdate" + todoUpdate.id +' '+todoUpdate.todoData+' '+todoUpdate.userId);
    return this.http.put<Todolist>(`http://localhost:8080/todolist/${todoUpdate.id}`,todoUpdate,{headers:this.headers});
  }

  add(todoUpdate: Todolist) :Observable<Object>  {

    console.log("post here "+ todoUpdate.id + ' '+ todoUpdate.userId + ' '+todoUpdate.todoData);
   return  this.http.post(`http://localhost:8080/todolist/`,todoUpdate,{headers:this.headers});
  }

  search(searcher : any) : Observable<Todolist[]> {

    console.log(searcher);
    return this.http.get<Todolist[]>(`http://localhost:8080/todolist/getsearch?query=id:${searcher.userId},title:
    ${searcher.todoData}`,{headers:this.headers});
  }

  setUserid() : Observable<BigInt>{
    return this.http.get<BigInt>(`http://localhost:8080/user/${this.decoded.sub}`,{headers:this.headers});
  }
}
