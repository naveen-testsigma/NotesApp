import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Authlogin} from "../models/authlogin";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieservice:CookieService) { }
  IsloggedIn(){
    return !!this.cookieservice.get("user");
  }
}
