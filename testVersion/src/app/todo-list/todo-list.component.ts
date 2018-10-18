import { TodoListPublicService } from './../todo-list-public.service';
import { Component, OnInit } from '@angular/core';
import { TodoListService, Todo } from '../TodoList.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers:[
    {provide: TodoListService, useClass: TodoListPublicService}
  ]
})
export class TodoListComponent implements OnInit {

 public todos: Todo[];
  constructor(private todoListServ: TodoListService) { }

  ngOnInit() {
    this.todos = this.todoListServ.getTodos();
  }

}
