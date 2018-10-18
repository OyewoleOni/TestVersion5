import { Injectable } from '@angular/core';
import { TodoListService, Todo } from './TodoList.service';

@Injectable()
export class TodoListPublicService implements TodoListService {

  constructor() { }

  getTodos() {

    const todos: Todo[] = [

      {

        title: 'get groceries',

        description: 'eggs, milk, etc.',

        done: false

      }

    ];
    return todos;

  }

}
