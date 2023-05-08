import {Component, OnInit} from '@angular/core';
import {Authsignup} from "../../models/authsignup";
import {UserserviceService} from "../../service/userservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  signup =new Authsignup();

  constructor(private userservice: UserserviceService, private router:Router) {
  }
  onSubmit(){
    console.log( this.userservice.postUser(this.signup).subscribe(res =>{
      console.log(res)
    })) ;
    alert('registered successfully !');
   this.router.navigate(['/login'])
  }
}
