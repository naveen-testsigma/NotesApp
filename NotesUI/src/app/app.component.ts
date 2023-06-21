import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'notesproject';
  constructor(private router: Router) {}
  shouldShowNavbar(): boolean {
    const currentRoute = this.router.url;
    return !currentRoute.startsWith('/error');
  }

}
