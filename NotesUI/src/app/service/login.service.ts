import { Injectable } from '@angular/core';
import {LoginComponent} from "../WebModule/login/login.component";
import {Router} from "@angular/router";
import {NotesComponent} from "../WebModule/notes/notes.component";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private login : LoginComponent,private route:Router) {

  }

}
