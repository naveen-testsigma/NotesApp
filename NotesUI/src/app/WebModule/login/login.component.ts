import {Component, EventEmitter} from '@angular/core';
import {Authlogin} from "../../types/authlogin";
import {UserserviceService} from "../../service/userservice.service";

import {Router} from "@angular/router";
import {NotesComponent} from "../notes/notes.component";
import {LoginService} from "../../service/login.service";
<<<<<<< HEAD
import { MainObject } from 'src/app/types/mainObject';

=======
import {MainObject} from "../../types/mainObject";
>>>>>>> origin/dev

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
      (res:any)=>{
      if(res == null)
<<<<<<< HEAD
        alert("Wrong username or password");
      else {        
=======
        alert("wrong username or password");
      else {
        localStorage.setItem("user",res.id || null);
>>>>>>> origin/dev
        this.router.navigate(['/dashboard']);
        localStorage.setItem("user",String(res.id || null));
      }
<<<<<<< HEAD
    }
    );
=======
      //localStorage.setItem("user",String(this.checker.id));
    });
>>>>>>> origin/dev


    }
}


