import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './WebModule/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './WebModule/login/login.component';
import { SignupComponent } from './WebModule/signup/signup.component';
import { DashboardComponent } from './WebModule/dashboard/dashboard.component';
import { HomeComponent } from './WebModule/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { NotesComponent } from './WebModule/notes/notes.component';
import { TodolistComponent } from './WebModule/todolist/todolist.component';
import {CommonModule} from '@angular/common';
import {JwtModule} from "@auth0/angular-jwt";
import { ErrorpageComponent } from './WebModule/errorpage/errorpage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    NotesComponent,
    TodolistComponent,
    ErrorpageComponent
  ],
  imports: [
    [FormsModule,BrowserModule],
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [LoginComponent,NotesComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
