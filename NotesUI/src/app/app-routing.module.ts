import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./WebModule/login/login.component";
import {SignupComponent} from "./WebModule/signup/signup.component";
import {DashboardComponent} from "./WebModule/dashboard/dashboard.component";
import {HomeComponent} from "./WebModule/home/home.component";
import {NotesComponent} from "./WebModule/notes/notes.component";
import {TodolistComponent} from "./WebModule/todolist/todolist.component";

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'',component:HomeComponent},
  {path:'notes',component: NotesComponent},
  {path: 'todolist',component:TodolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
