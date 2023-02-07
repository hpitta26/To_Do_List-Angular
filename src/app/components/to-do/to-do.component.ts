import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  
  @Input() todo: ToDo = {text: 'Hello', time: '3:00pm', star: false};
  @Output() onDeleteToDo: EventEmitter<ToDo> = new EventEmitter();
  @Output() onUpdateStar: EventEmitter<ToDo> = new EventEmitter();
  faTrashCan = faTrashCan;
  faStar = faStar;

  constructor() {}
  ngOnInit(): void {}

  onDelete(todo: ToDo) {
    this.onDeleteToDo.emit();
  }

  onUpdate(todo: ToDo) {
    this.onUpdateStar.emit();
  }

}
