import {Component, OnInit} from '@angular/core';
import {Todolist} from "../../types/todolist";
import {TodolistService} from "../../service/todolist.service";

import {Router, Routes} from "@angular/router";

class TodolistSearch {
  todoData: String | undefined;
  userId : String | undefined;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{
  notFoundshow = false;
  private userid: BigInt =0n;

constructor(private todoservice : TodolistService,private routes : Router) {
}
 updataPlaceHolder :string = "";
todolist : Todolist[] | undefined;
  showUpdate=  false;
  idTodo :string ="";
  textUpdate : string ="default value";
  searchlist : Todolist[]|undefined;
  todoUpdate : Todolist ={id: "", todoData: "", userId: "" ,datecreated : "",datedeadline :''}
  addUpdate: string ="";
  showAdd= false;
  searcher: TodolistSearch = { todoData: "", userId: ""};
  mainTableShow = false;
  searchTableshow= false;

  ngOnInit(): void {
    this.todoservice.setUserid().subscribe(res=>{
      this.userid = res;
      this.getting();
    })
  }
 getting(){
    this.notFoundshow = false;
    this.mainTableShow = true;
    this.searchTableshow = false;
    this.todoservice.findAll(this.userid).subscribe(res=>{
      console.log("result" ,res);
      this.todolist = res;
      this.showAdd = false;
      this.showUpdate = false;
      console.log("todolist   " + this.todolist);
    })
 }


  delete(id : string) {
    this.todoservice.delete(id).subscribe((res:any)=>
    {
      console.log(res);
    });
    this.routes.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.routes.navigate(['/dashboard/todolist'])
    })

  }

  update(id:string,tododata:string) {
    this.textUpdate = tododata;
    this.updataPlaceHolder = tododata;
    this.mainTableShow = false;
    this.searchTableshow = false;
    this.showAdd = false;
    this.showUpdate = true;
    this.idTodo = id;
    }

  updateList() {
    this.todoUpdate.id = this.idTodo;
    this.todoUpdate.todoData = this.textUpdate;
    this.todoUpdate.userId = String(this.userid);
    this.todoservice.update(this.todoUpdate).subscribe(res=>{
        console.log(res);
      }
    )
    this.routes.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.routes.navigate(['/dashboard/todolist']);
    })
    // window.location.reload();
  }

  addListCall() {
    this.notFoundshow = false;
    this.mainTableShow = false;
    this.searchTableshow = false;
    this.showUpdate = false;
    this.showAdd = true;
  }

  addList() {
    this.todoUpdate.todoData = this.addUpdate;
    this.todoUpdate.userId = String(this.userid);
    this.showUpdate = false;
    this.todoservice.add(this.todoUpdate).subscribe(res=>{
      console.log("result" + res);
    })
    // this.routes.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
    //   this.routes.navigate(['/dashboard/todolist']);
    // })
    this.routes.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.routes.navigate(['/dashboard/todolist']);
    })
  }

  searcherfunc() {
    if (this.searcher.todoData == "")
      this.getting();
    else {
      this.showUpdate = false;
      this.showAdd = false;

      this.mainTableShow = false;
      this.searcher.userId = String(this.userid);
      this.todoservice.search(this.searcher).subscribe(res => {
        console.log(res);
        this.searchlist = res;
        if (this.searchlist.length == 0) {
          this.notFoundshow = true;
        } else {
          this.searchTableshow = true;
        }
      });
    }
  }
}
