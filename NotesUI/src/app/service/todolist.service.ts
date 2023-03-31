import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Notes} from "../types/notes";
import {HttpClient} from "@angular/common/http";
import {Todolist} from "../types/todolist";
import {Obj} from "@popperjs/core";

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<Todolist[]>{

    return this.http.get<Todolist[]>( `http://localhost:8080/todolist/userid/${localStorage.getItem("user")}`);

  }

  delete(id : string) :Observable<any>{
    return this.http.delete(`http://localhost:8080/todolist/delete/${id}`);
  }

  update(todoUpdate : Todolist) : Observable<Object>{
    // @ts-ignore
    todoUpdate.userId =  localStorage.getItem("user");
    console.log("todoUpdate" + todoUpdate.id +' '+todoUpdate.todoData+' '+todoUpdate.userId);
    return this.http.put<Todolist>(`http://localhost:8080/todolist/update/${todoUpdate.id}`,todoUpdate);
  }

  add(todoUpdate: Todolist) :Observable<Object>  {
    // @ts-ignore
    todoUpdate.userId = localStorage.getItem("user");
    console.log("post here "+ todoUpdate.id + ' '+ todoUpdate.userId + ' '+todoUpdate.todoData);
   return  this.http.post(`http://localhost:8080/todolist/post`,todoUpdate);
  }

  search(searcher : Todolist) : Observable<Todolist[]> {
    // @ts-ignore
    searcher.userId = localStorage.getItem("user");
    return this.http.post<Todolist[]>('http://localhost:8080/todolist/search',searcher);
  }
}
