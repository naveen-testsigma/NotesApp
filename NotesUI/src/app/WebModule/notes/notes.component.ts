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
  updateHolder = new Notes ();
  id : BigInt = 0n;
  user : any = {  };
  isVisible=false;
  isSearch = false;
  notFound = false;
  serachNotes : Notes[] | undefined;
  notee =new Notes();
  notee1 =new Notes();
  searcher =new Search();
  adddisplay = false;
  private isClicked: boolean = false;
  constructor(private noteservice : NotesService,private route : Router) {


  }
  ngOnInit(): void {
   if(this.searcher.noteHeading && this.searcher.noteHeading.length == 0){
     this.searcherfunc();
   }
   this.noteservice.idSetter().subscribe(res=> {
       this.id = res;
       console.log(this.id);

     this.getting();
     }
   );


  }
  getting(){
    console.log("Getting find all here "+ this.id)
    this.searcherfunc();
    this.isSearch = true;
    this.notFound = false;
    this.adddisplay = false;
    this.isVisible = false;
  }
  add() {
    this.notee.userId = Number(this.id);
    this.noteservice.add(this.notee).subscribe(data =>{
      console.log(data);
      this.route.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.route.navigate(['/dashboard/notes']);
      })
    });
  }

  update() {
    this.isVisible=false;
    this.notee1.noteBody="Update Here";
    this.notee1.noteHeading="Update Here";
    this.notee1.userId = Number(this.id);
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
    this.isSearch = false;
    this.isVisible=true;
    this.notee1.id  =String(noteid);

  }

  delete(id: string) {
    this.noteservice.delete(id).subscribe((res : any)=>{});
    this.route.navigateByUrl("/",{skipLocationChange:true}).then(()=>{
      this.route.navigate(['/dashboard/notes']);
    })
  }

  searcherfunc() {
    this.isVisible = false;
    this.adddisplay = false;
      this.searcher.userId = String(this.id);
      this.noteservice.search(this.searcher).subscribe(res => {
        if (res.length == 0) {
          this.notFound = true;
          this.isSearch = false;
        }
        else {
          this.notFound = false;
          this.serachNotes = res;
          this.isSearch = true;
        }
      });

  }

  adddisplayInvoke() {
    this.isVisible = false;
    this.isSearch = false;
    this.adddisplay = true;
  }
}
