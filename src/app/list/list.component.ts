import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  msg = '';
  lists:object={
  TO_DO:Array,
  IN_PROGRESS:Array,
  DONE:Array
  };
  
  constructor(private dragula: DragulaService) { 
    this.dragula.setOptions('bag-items', {
      revertOnSpill: true
    });
  }

  ngOnInit() {
    if(!localStorage.getItem('lists')){
      localStorage.setItem('lists','');
      this.lists={
        TO_DO:[],
        IN_PROGRESS:[],
        DONE:[]
      }

    }
    else{
      this.lists= JSON.parse(localStorage.getItem('lists'));
    }
    this.dragula
    .drag
    .subscribe(value => {
      this.msg = `Dragging the ${ value[1].innerText }!`;
    });

  this.dragula
    .drop
    .subscribe(value => {
      this.msg = `Dropped the ${ value[1].innerText }!`;

      setTimeout(() => {
        this.msg = '';
        this.updateStore();
      }, 500);
 
    });
  }
  receiveMessage($event) {
 //   this.message = $event
 console.log($event);
 switch ($event.listName) {
   case "TO_DO":
     this.lists['TO_DO'].push($event);
     this.updateStore();
     break;
     case "IN_PROGRESS":
     this.lists['IN_PROGRESS'].push($event);
     this.updateStore();
     break;
     case "DONE":
     this.lists['DONE'].push($event);
     this.updateStore();
     break;
 
   default:
     break;
 }
  }
  updateStore(){
    localStorage.setItem('lists',JSON.stringify(this.lists));
    console.log('value changed');
  }
  deleteTask(i,list){
  this.lists[list].splice(i,1);
  this.updateStore();
  }
}
