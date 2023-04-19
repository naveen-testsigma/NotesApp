import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent{
  constructor(private http:HttpClient) {
  }

  delayer(){
    this.http.get(`http://localhost:8080`).subscribe( res=>{
      console.log(res);
    });

  }

}
