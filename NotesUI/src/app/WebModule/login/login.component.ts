import {Component, EventEmitter} from '@angular/core';
import {Authlogin} from "../../types/authlogin";
import {UserserviceService} from "../../service/userservice.service";

import {Router} from "@angular/router";
import {NotesComponent} from "../notes/notes.component";
import {LoginService} from "../../service/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  checker : Authlogin|undefined;

  constructor(private userservice: UserserviceService,private router : Router) {
  }

 login : Authlogin={
    id : 0n,name : "",
   password: "", emailId: ""

 }

  onSubmit() {

    this.userservice.getIDuser(this.login.emailId).subscribe(res=>{
      this.checker = res;
      console.log("on submit : "+ this.login.emailId);
      localStorage.setItem("user",String(this.checker.id));
    });

    }

  }


