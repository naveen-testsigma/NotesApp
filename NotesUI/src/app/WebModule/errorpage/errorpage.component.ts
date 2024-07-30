import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit{
  errorMessage: string = '';
  constructor(private routes: Router,private route : ActivatedRoute){
  }
  ngOnInit() {
    this.errorMessage = this.route.snapshot.paramMap.get('message') || 'Unknown error occurred';
  }
  returnHome() {
    this.routes.navigate(["login"]);
  }
}
