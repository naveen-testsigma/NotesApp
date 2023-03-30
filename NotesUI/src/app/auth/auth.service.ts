import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Authlogin} from "../types/authlogin";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  IsloggedIn(){
    return !!localStorage.getItem("user");
  }
}
