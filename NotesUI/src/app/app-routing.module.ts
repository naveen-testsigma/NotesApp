import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./WebModule/login/login.component";
import {SignupComponent} from "./WebModule/signup/signup.component";
import {DashboardComponent} from "./WebModule/dashboard/dashboard.component";
import {HomeComponent} from "./WebModule/home/home.component";
import {NotesComponent} from "./WebModule/notes/notes.component";
import {TodolistComponent} from "./WebModule/todolist/todolist.component";
import {AuthGuard} from "./auth/auth.guard";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'',component:HomeComponent,pathMatch:"full"},
  {path:'',canActivate:[AuthGuard],children:[

      {path:'dashboard',component:DashboardComponent},
      {path: 'dashboard/todolist',component:TodolistComponent},
      {path:'dashboard/notes',component: NotesComponent},
      {path:'dashboard/test',component:TestComponent}
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
