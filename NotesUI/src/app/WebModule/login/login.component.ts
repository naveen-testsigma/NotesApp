import { Component } from '@angular/core';
import {Authlogin} from "../../types/authlogin";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 login : Authlogin | undefined;
}
