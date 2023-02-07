import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/ToDo';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  
  @Output() onAddToDo: EventEmitter<ToDo> = new EventEmitter();
  text: string = "";
  time: string = "";
  star: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  onSubmit() {
    if(!this.text) {
      alert("write something!")
      return;
    }

    const newToDo = {
      text: this.text,
      time: this.time,
      star: this.star
    }

    this.onAddToDo.emit(newToDo); //this fires off a function in the Parent Component

    this.text = '';
    this.time = '';
    this.star = false;
  }

}
