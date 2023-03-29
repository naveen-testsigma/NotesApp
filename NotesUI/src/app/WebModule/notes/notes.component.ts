import {Component, OnInit} from '@angular/core';
import {NotesService} from "../../service/notes.service";
import {Notes} from "../../types/notes";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {Search} from "../../types/search";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  user : any = {  };
  isVisible=false;
  isSearch = false;
  notFound = false;
  notes : Notes[] | undefined;
  serachNotes : Notes[] | undefined;
  notee : Notes={id: "", noteBody: "", noteHeading: "", userId: 1};
  notee1 : Notes={id: "", noteBody: "", noteHeading: "", userId: 1};
  searcher : Search ={noteHeading: "", userId: ""}
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
    // @ts-ignore
    this.notee.userId = localStorage.getItem("user");

    console.log("add here noteservice : "+ this.notee.noteBody + this.notee.noteHeading + this.notee.userId + this.notee.id);
    this.noteservice.add(this.notee).subscribe(data =>{
      console.log(data);
      window.location.reload();
    });
  }

  update() {
    this.isVisible=false;
    // @ts-ignore
    this.notee1.userId = localStorage.getItem("user");

    console.log("add here noteservice : "+ this.notee1.noteBody + this.notee1.noteHeading + this.notee1.userId + this.notee1.id);
    this.noteservice.update(this.notee1).subscribe(data =>{
      console.log(data);

    });
  window.location.reload();
  }
  setId(n : string)
  {
    this.isVisible=true;
    this.notee1.id  =String(n);

  }

  delete(id: string) {
    console.log("delete was here : "+ id);
    this.noteservice.delete(id).subscribe((data: any) => {
    })
    window.location.reload();
  }

  searcherfunc() {
    // @ts-ignore
    this.searcher.userId = localStorage.getItem("user");
    console.log(this.searcher);
     this.noteservice.search(this.searcher).subscribe(res =>{
       if(res.length==0)
         this.notFound = true;
       else {
         this.notFound = false;
         this.serachNotes = res;
         this.isSearch = true;
       }
       console.log(res);
     });


  }
}
