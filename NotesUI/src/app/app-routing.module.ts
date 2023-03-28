import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./WebModule/login/login.component";
import {SignupComponent} from "./WebModule/signup/signup.component";
import {DashboardComponent} from "./WebModule/dashboard/dashboard.component";
import {HomeComponent} from "./WebModule/home/home.component";

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
