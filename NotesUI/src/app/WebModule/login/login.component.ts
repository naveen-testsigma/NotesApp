import {Component, EventEmitter} from '@angular/core';
import {Authlogin} from "../../models/authlogin";
import {UserserviceService} from "../../service/userservice.service";

import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";
import {JwtHelperService} from "@auth0/angular-jwt";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  checker : Authlogin | undefined;

  constructor(private cookieservice:CookieService,private userservice: UserserviceService,private router : Router,private http : HttpClient) {
  }

 login =new Authlogin();

  onSubmit() {

    this.userservice.getIDuser(this.login).subscribe(
      (res:any)=>{
      if(res == null)

        alert("wrong username or password");
      else {
          var dorm = new JwtHelperService();
          const decoded = dorm.decodeToken(this.cookieservice.get("user"));
          console.log("email" + " " + decoded.sub +" object here!")
          alert("logging in successful");
          this.router.navigate(["/dashboard"]);

          this.router.navigateByUrl("/",{skipLocationChange:true}).then(()=>{
            window.location.reload();

          })
          this.router.navigate(['/dashboard'])


      }
    }
    );
    }
}


