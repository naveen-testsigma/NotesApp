import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
ifLoggedout: Boolean = false;
ifLoggedin: Boolean = true;
constructor(private routes:Router){
if(localStorage.getItem("user"))
{
  this.ifLoggedin = false;
 this.ifLoggedout =true;
}
else{
  this.ifLoggedin = true;
  this.ifLoggedout = false;
}
}
  logoutChecker() {
  localStorage.clear();
  this.ifLoggedout = false;
  this.ifLoggedin = true;
  this.routes.navigate(['']);
  window.location.reload();
}
}
