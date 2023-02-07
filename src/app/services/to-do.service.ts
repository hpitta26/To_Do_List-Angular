import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ToDo } from '../ToDo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' //send content-type to backend
  })
};

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private apiUrl = 'http://localhost:3004/todos'

  constructor(private http: HttpClient) { }

  getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.apiUrl);
  }

  deleteToDo(todo: ToDo): Observable<ToDo> {
    const url = `${this.apiUrl}/${todo.id}`; //targets the task with a specific id on the backend
    return this.http.delete<ToDo>(url); //delete requests for deletion
  }

  updateStar(todo: ToDo): Observable<ToDo> {
    const url = `${this.apiUrl}/${todo.id}`; //url to todo with target id
    return this.http.put<ToDo>(url, todo, httpOptions); //put requests to update data
  }

  addToDo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.apiUrl, todo, httpOptions); //post requests to submit new data
  }


}
