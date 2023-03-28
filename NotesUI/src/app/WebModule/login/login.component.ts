import { Component } from '@angular/core';
import {Authlogin} from "../../types/authlogin";
import {UserserviceService} from "../../service/userservice.service";

import {Router} from "@angular/router";

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
   password: "", username: ""

 }
  onSubmit() {

    this.userservice.getUser(this.login.username).subscribe(res=>{
      this.checker = res;
    });
    if(this.login.password == this.checker?.password){
      alert("login successfull");
      this.router.navigate(['/dashboard']);
    }
    else {
      alert("wrong username/password");
    }
  }
}
