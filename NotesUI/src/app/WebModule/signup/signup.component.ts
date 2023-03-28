import {Component, OnInit} from '@angular/core';
import {Authsignup} from "../../types/authsignup";
import {UserserviceService} from "../../service/userservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  signup : Authsignup ={emailId: "", name: "", password: ""};

  constructor(private userservice: UserserviceService, private router:Router) {
  }
  onSubmit(){
   this.userservice.postUser(this.signup);
   this.router.navigate(['/login'])
  }
}
