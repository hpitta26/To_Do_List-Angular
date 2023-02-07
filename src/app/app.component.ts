import { Component, OnInit } from '@angular/core';
import { ToDoService } from './services/to-do.service';
import { ToDo } from './ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'to-do-list';

  todos: ToDo[] = [];

  constructor(private todoService: ToDoService) {}
  ngOnInit(): void {
    this.todoService.getToDos().subscribe((todos) => this.todos = todos);
  }

  deleteToDo(todo: ToDo) {
    this.todoService
      .deleteToDo(todo)
      .subscribe(
        () => this.todos = this.todos.filter((t) => t.id !== todo.id) //this updates what tasks are displayed (removes the one with the id you deleted)
      );
  }

  toggleStar(todo: ToDo) {
    todo.star = !todo.star; //you must update the server or nothing will change on reload
    this.todoService.updateStar(todo).subscribe();
    // console.log(task.reminder);
  }

  addToDo(todo: ToDo) {
    this.todoService.addToDo(todo).subscribe((todo) => (this.todos.push(todo)));
  }
  



}
