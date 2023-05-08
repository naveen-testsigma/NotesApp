import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
ifLoggedout: Boolean = false;
ifLoggedin: Boolean = true;
  loggingbuttondisable: boolean = true;
constructor(private routes:Router,private cookieservice:CookieService){
if(this.cookieservice.get("user"))
{
  if(this.routes.url === '/login')
    this.loggingbuttondisable = false;
  this.ifLoggedin = false;
 this.ifLoggedout =true;
}
else{
  this.ifLoggedin = true;
  this.ifLoggedout = false;
}
}
  logoutChecker() {
  this.cookieservice.delete("user");
  this.ifLoggedout = false;
  this.ifLoggedin = true;
  this.routes.navigate(['']);
  window.location.reload();
}
}
