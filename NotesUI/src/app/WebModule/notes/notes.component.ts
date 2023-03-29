import {Component, OnInit} from '@angular/core';
import {NotesService} from "../../service/notes.service";
import {Notes} from "../../types/notes";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  notes : Notes[] | undefined;
  notee : Notes={id: "", noteBody: "", noteHeading: "", userId: 1};
  constructor(private noteservice : NotesService,private route : Router, private loginservie: LoginService) {

  }
  ngOnInit(): void {
   this.getting();
  }
  getting(){
    this.noteservice.findALl().subscribe(data =>{
      this.notes = data;
    })
  }
  add() {
    this.notee.userId = 1;
    console.log("add here noteservice : "+ this.notee.noteBody + this.notee.noteHeading + this.notee.userId + this.notee.id);
    this.noteservice.add(this.notee).subscribe(data =>{
      console.log(data);
    });
  }

  update(id : string) {
    console.log("update was here : "+ id);
  }

  delete(id: string) {
    console.log("delete was here : "+ id);
    this.noteservice.delete(id).subscribe((data: any) => {
    })
    window.location.reload();
  }

}
