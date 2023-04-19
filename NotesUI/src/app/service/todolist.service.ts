import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Notes} from "../types/notes";
import {HttpClient} from "@angular/common/http";
import {Todolist} from "../types/todolist";
import {JwtDecodeOptions} from "jwt-decode";
import jwt_decode from 'jwt-decode';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private id: any ;

  constructor(private http: HttpClient)  {
    var dorm = new JwtHelperService();
    // @ts-ignore
    const decoded = dorm.decodeToken(localStorage.getItem("user"));
    console.log("email" + " " + decoded.sub +" object here!")
    this.http.get<any>(`http://localhost:8080/user/${decoded.sub}`).subscribe(res=>{
      console.log("response form email " +res);
      this.id = res;
    });
  }

  findAll() : Observable<Todolist[]>{

    return this.http.get<Todolist[]>( `http://localhost:8080/todolist/userid/${this.id}`);

  }

  delete(id : string) :Observable<any>{
    return this.http.delete(`http://localhost:8080/todolist/delete/${id}`);
  }

  update(todoUpdate : Todolist) : Observable<Object>{

    todoUpdate.userId =  this.id;
    console.log("todoUpdate" + todoUpdate.id +' '+todoUpdate.todoData+' '+todoUpdate.userId);
    return this.http.put<Todolist>(`http://localhost:8080/todolist/update/${todoUpdate.id}`,todoUpdate);
  }

  add(todoUpdate: Todolist) :Observable<Object>  {

    todoUpdate.userId = this.id;
    // @ts-ignore
    console.log("post here "+ todoUpdate.id + ' '+ todoUpdate.userId + ' '+todoUpdate.todoData);
   return  this.http.post(`http://localhost:8080/todolist/post`,todoUpdate);
  }

  search(searcher : any) : Observable<Todolist[]> {

    console.log(searcher);
    searcher.userId = this.id;
    return this.http.post<Todolist[]>('http://localhost:8080/todolist/search',searcher);
  }
}
