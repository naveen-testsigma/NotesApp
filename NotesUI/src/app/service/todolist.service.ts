import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, map } from 'rxjs';
import { Notes } from '../models/notes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todolist } from '../models/todolist';
import { JwtDecodeOptions } from 'jwt-decode';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  private dorm = new JwtHelperService();
  private decoded = this.dorm.decodeToken(this.cookieservice.get('user'));
  private token: string = 'Bearer ' + this.cookieservice.get('user');

  private headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', '*')
    .set('Access-Control-Allow-Headers', '*')
    .set('Authorization', this.token);
  constructor(private http: HttpClient, private cookieservice: CookieService) {}

  findAll(id: BigInt): Observable<Todolist[]> {
    return this.http
      .get<Todolist[]>(`http://localhost:8080/todolist?query=id:${id}`, {
        headers: this.headers,
      })
      .pipe(
        map((data) => data.map((data1) => new Todolist().deserialize(data1))),
        catchError(() => throwError('Problem while fetching ElementFilter'))
      );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/todolist/${id}`, {
      headers: this.headers,
    });
  }

  update(todoUpdate: Todolist): Observable<Object> {
    console.log(
      'todoUpdate' +
        todoUpdate.id +
        ' ' +
        todoUpdate.todoData +
        ' ' +
        todoUpdate.userId
    );
    return this.http.put<Todolist>(
      `http://localhost:8080/todolist/${todoUpdate.id}`,
      todoUpdate.serialize(),
      { headers: this.headers }
    );
  }

  add(todoUpdate: Todolist): Observable<Object> {
    console.log(
      'post here ' +
        todoUpdate.id +
        ' ' +
        todoUpdate.userId +
        ' ' +
        todoUpdate.todoData
    );
    return this.http.post(
      `http://localhost:8080/todolist/`,
      todoUpdate.serialize(),
      { headers: this.headers }
    );
  }

  search(searcher: any): Observable<Todolist[]> {
    console.log('searcher in funciton :' + searcher.todoData);
    if (searcher.todoData.length == 0) {
      return this.http
        .get<Todolist[]>(
          `http://localhost:8080/todolist?query=id:${searcher.userId}`,
          { headers: this.headers }
        )
        .pipe(
          map((data) => data.map((data1) => new Todolist().deserialize(data1))),
          catchError(() => throwError('Problem while fetching ElementFilter'))
        );
    } else {
      return this.http
        .get<Todolist[]>(
          `http://localhost:8080/todolist?query=id:${searcher.userId},title:${searcher.todoData}`,
          { headers: this.headers }
        )
        .pipe(
          map((data) => data.map((data1) => new Todolist().deserialize(data1))),
          catchError(() => throwError('Problem while fetching ElementFilter'))
        );
    }
  }

  setUserid(): Observable<BigInt> {
    return this.http.get<BigInt>(
      `http://localhost:8080/user/${this.decoded.sub}`,
      { headers: this.headers }
    );
  }
}
