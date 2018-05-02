import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  addTaskForm:FormGroup;
showInputCard:boolean=false;
  @Input() listName: string;
  @Output() messageEvent = new EventEmitter<object>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addTaskForm = this.fb.group({
      "taskData":['',[Validators.required]]
    })
  
  }
  addCard(){
    let cardData={
 data:this.addTaskForm.get('taskData').value,
 timeCreated:new Date(),
 listName:this.listName
   } 
    this.addTaskForm.reset();
    this.messageEvent.emit(cardData)
  }
 
}
