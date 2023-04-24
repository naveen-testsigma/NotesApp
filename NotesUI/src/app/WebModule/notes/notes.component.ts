import {Component, OnInit} from '@angular/core';
import {NotesService} from "../../service/notes.service";
import {Notes} from "../../types/notes";
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import {Search} from "../../types/search";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  updateHolder : Notes ={id: "", noteBody: "", noteHeading: "", userId: 1};
  id : BigInt = 0n;
  user : any = {  };
  isVisible=false;
  isSearch = false;
  notFound = false;
  notesdisplay = true;
  notes : Notes[] | undefined;
  serachNotes : Notes[] | undefined;
  notee : Notes={id: "", noteBody: "", noteHeading: "", userId: 1};
  notee1 : Notes={id: "", noteBody: "updatehere :)", noteHeading: "updatehere :)", userId: 1};
  searcher : Search ={noteHeading: "", userId: ""}
  adddisplay = false;
  private isClicked: boolean = false;
  constructor(private noteservice : NotesService,private route : Router) {


  }
  ngOnInit(): void {

   this.noteservice.idSetter().subscribe(res=> {
     console.log("first function returning id value : " + res)
       this.id = res;
     this.getting();
     }
   );


  }
  getting(){
    console.log("Getting find all here "+ this.id)
    this.noteservice.findALl(this.id).subscribe(data =>{
      this.notes = data;
      console.log(data)
    })
  }
  add() {

    this.notee.userId = Number(this.id);
    console.log("add here noteservice : "+ this.notee.noteBody +" note heading : "+ this.notee.noteHeading + this.notee.userId + this.notee.id);
    this.noteservice.add(this.notee).subscribe(data =>{
      console.log(data);
      this.route.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.route.navigate(['/dashboard/notes']);
      })
    });
  }

  update() {
    this.isVisible=false;
    this.notee1.userId = Number(this.id);
    console.log("add here noteservice : "+ this.notee1.noteBody + this.notee1.noteHeading + this.notee1.userId + this.notee1.id);
    this.noteservice.update(this.notee1).subscribe(data =>{
      console.log(data);

    });
    this.route.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.route.navigate(['/dashboard/notes']);
    })
  }
  setId(noteid:string,noteheading:string,notebody : string)
  {
    this.notee1.noteHeading = noteheading;
    this.notee1.noteBody = notebody;
    this.updateHolder.noteHeading = noteheading;
    this.updateHolder.noteBody = notebody;
    this.adddisplay = false;
    this.notesdisplay = false;
    this.isSearch = false;
    this.isVisible=true;
    this.notee1.id  =String(noteid);

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
    if( this.searcher.noteHeading =="")
      this.getting();
    else {
      this.isVisible = false;
      this.adddisplay = false;
      this.notesdisplay = false;
      // @ts-ignore

      console.log(this.searcher);
      this.searcher.userId = String(this.id);
      this.noteservice.search(this.searcher).subscribe(res => {
        if (res.length == 0)
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

  noteslist() {
    this.notFound = false;
    this.searcher.noteHeading="";
    this.isVisible = false;
    this.adddisplay = true;
    this.notesdisplay = true;
    this.isSearch = false;
  }


  adddisplayInvoke() {
    this.isVisible = false;
    this.notesdisplay = false;
    this.isSearch = false;
    this.adddisplay = true;
  }

}
