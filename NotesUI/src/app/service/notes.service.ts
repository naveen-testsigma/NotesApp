import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notes } from '../models/notes';
import { catchError, Observable, throwError, map } from 'rxjs';
import { Search } from '../models/search';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private dorm = new JwtHelperService();
  private decoded = this.dorm.decodeToken(this.cookieservice.get('user'));
  private token: string = 'Bearer ' + this.cookieservice.get('user');
  private headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', 'http://localhost:4200')
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    .set('Access-Control-Allow-Headers', 'Content-Type')
    .set('Origin', 'http://localhost:4200')
    .set('Content-Type', 'application/json')
    .set('Authorization', this.token);
  constructor(private http: HttpClient, private cookieservice: CookieService) {}

  private noteURL = 'http://localhost:8080/notes';
  idSetter(): Observable<BigInt> {
    return this.http.get<BigInt>(
      `http://localhost:8080/user/${this.decoded.sub}`,
      { headers: this.headers }
    );
  }

  findALl(id: string | BigInt): Observable<Notes[]> {
    console.log('findall id passed value :' + id);
    return this.http
      .get<Notes[]>(`${this.noteURL}?query=id:${id}`, { headers: this.headers })
      .pipe(
        map((data) => data.map((data1) => new Notes().deserialize(data1))),
        catchError(() => throwError('Problem while fetching ElementFilter'))
      );
  }

  delete(id: string): Observable<any> {
    console.log('delete here noteservie : ' + id);
    return this.http.delete(`http://localhost:8080/notes/${id}`, {
      headers: this.headers,
    });
  }
  add(notes: Notes): Observable<Object> {
    console.log('user id :' + notes.userId);
    return this.http.post('http://localhost:8080/notes/', notes.serialize(), {
      headers: this.headers,
    });
  }

  update(notes: Notes): Observable<Object> {
    console.log(notes);
    return this.http.post(
      `http://localhost:8080/notes/${notes.id}`,
      notes.serialize(),
      { headers: this.headers }
    );
  }

  search(searcher: Search): Observable<Notes[]> {
    if (!searcher.noteHeading) {
      console.log('null value event : ');
      return this.findALl(searcher.userId);
    } else
      return this.http
        .get<Notes[]>(
          `http://localhost:8080/notes?query=id:${searcher.userId},title:${searcher.noteHeading}`,
          { headers: this.headers }
        )
        .pipe(
          map((data) => data.map((data1) => new Notes().deserialize(data1))),
          catchError(() => throwError('Problem while fetching ElementFilter'))
        );
  }
}
