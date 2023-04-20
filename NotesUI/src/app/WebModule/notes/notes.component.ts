import {Component, OnInit} from '@angular/core';
import {NotesService} from "../../service/notes.service";
import {Notes} from "../../types/notes";
import {Router} from "@angular/router";

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
  notesdisplay = true;
  notes : Notes[] | undefined;
  serachNotes : Notes[] | undefined;
  notee : Notes={id: "", noteBody: "", noteHeading: "", userId: 1};
  notee1 : Notes={id: "", noteBody: "", noteHeading: "", userId: 1};
  searcher : Search ={noteHeading: "", userId: ""}
  adddisplay = true;
  constructor(private noteservice : NotesService,private route : Router) {

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
    console.log("add here noteservice : "+ this.notee.noteBody + this.notee.noteHeading + this.notee.userId + this.notee.id);
    this.noteservice.add(this.notee).subscribe(data =>{
      console.log(data);
      this.route.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.route.navigate(['/dashboard/notes']);
      })
    });
  }

  update() {
    this.isVisible=false;
    // @ts-ignore

    console.log("add here noteservice : "+ this.notee1.noteBody + this.notee1.noteHeading + this.notee1.userId + this.notee1.id);
    this.noteservice.update(this.notee1).subscribe(data =>{
      console.log(data);

    });
    this.route.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.route.navigate(['/dashboard/notes']);
    })
  }
  setId(n : string)
  {
    this.adddisplay = false;
    this.isVisible=true;
    this.notee1.id  =String(n);

  }

  delete(id: string) {
    console.log("delete was here : "+ id);
    this.noteservice.delete(id).subscribe((res : any)=>{
      console.log(res);
    });
    this.route.navigateByUrl("/",{skipLocationChange:true}).then(()=>{
      this.route.navigate(['/dashboard/notes']);
    })
  }

  searcherfunc() {
    this.isVisible = false;
    this.adddisplay = false;
    this.notesdisplay = false;
    // @ts-ignore

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

  noteslist() {
    this.notFound = false;
    this.searcher.noteHeading="";
    this.isVisible = false;
    this.adddisplay = true;
    this.notesdisplay = true;
    this.isSearch = false;
  }

 
}
