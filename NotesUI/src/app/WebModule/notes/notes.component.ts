import {Component, OnInit} from '@angular/core';
import {NotesService} from "../../service/notes.service";
import {Notes} from "../../types/notes";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  notes : Notes | undefined;
  constructor(private noteservice : NotesService) {
  }
  ngOnInit(): void {
this.noteservice.findALl().subscribe(data =>{
  this.notes = data;
})
  }

}
