import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Notes} from "../types/notes";
import {Observable} from "rxjs";
import {Search} from "../types/search";
import {JwtHelperService} from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
export class NotesService{
  private  dorm = new JwtHelperService();
  // @ts-ignore
  private  decoded = this.dorm.decodeToken(localStorage.getItem("user"));
  private token:string = "Bearer "+ localStorage.getItem("user");
  private headers = new HttpHeaders()
    .set("Access-Control-Allow-Origin", "http://localhost:4200")
    .set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    .set("Access-Control-Allow-Headers", "Content-Type")
    .set('Origin','http://localhost:4200')
    .set('Content-Type','application/json')
    .set('Authorization',this.token)
    ;
  constructor(private http: HttpClient) {

  }


  private noteURL = "http://localhost:8080/notes/get";
  idSetter(): Observable<BigInt>{
   return this.http.get<BigInt>(`http://localhost:8080/user/${this.decoded.sub}`,{headers:this.headers});
  }

  findALl(id: string | BigInt) : Observable<Notes[]>{
    console.log("findall id passed value :"+id);
    return this.http.get<Notes[]>( `${this.noteURL}?id=${id}`,{headers:this.headers})
  }

  delete(id: string) : Observable<any> {
    console.log("delete here noteservie : "+ id);
    return this.http.delete(`http://localhost:8080/notes/${id}`,{headers:this.headers});
  }
  add(notes : Notes) : Observable<Object> {
    console.log("user id :" +notes.userId);
    return this.http.post('http://localhost:8080/notes/',notes,{headers:this.headers});
  }

  update(notes : Notes) : Observable<Object>{
   console.log(notes);
    return this.http.post(`http://localhost:8080/notes/${notes.id}`,notes,{headers:this.headers});
  }

  search(searcher : Search) : Observable<Notes[]>{
    console.log(searcher);
    return this.http.get<Notes[]>(`http://localhost:8080/notes/get?id=${searcher.userId}&query=${searcher.noteHeading}`,{headers:this.headers});

  }


}
