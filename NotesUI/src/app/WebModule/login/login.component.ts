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
  checker : Authlogin | undefined;

  constructor(private userservice: UserserviceService,private router : Router) {
  }

 login : Authlogin={
   password: "", emailId: ""

 }

  onSubmit() {

    this.userservice.getIDuser(this.login).subscribe(
      res=>{
      if(res == null)
        alert("wrong username or password");
      else {
        console.log(res);
        this.router.navigate(['/dashboard']);
        // localStorage.setItem("user",String(this.checker.id));
      }

    });


    }

  }


