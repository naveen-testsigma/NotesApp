import {Component, EventEmitter} from '@angular/core';
import {Authlogin} from "../../types/authlogin";
import {UserserviceService} from "../../service/userservice.service";

import {Router} from "@angular/router";
import {JWTTokenService} from "../../service/jwtdecode.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  checker : Authlogin | undefined;

  constructor(private userservice: UserserviceService,private router : Router,private jwt : JWTTokenService) {
  }

 login : Authlogin={
   password: "", emailId: ""

 }

  onSubmit() {

    this.userservice.getIDuser(this.login).subscribe(
      (res:any)=>{
      if(res == null)

        alert("wrong username or password");
      else {
          localStorage.setItem("user",res.token);
          console.log("token "+ localStorage.getItem("user"))
        console.log(this.jwt.idgetfromtoken(res.token));
          alert("logging in successful");
          this.router.navigate(["/dashboard"]);
      }
    }
    );



    }
}


