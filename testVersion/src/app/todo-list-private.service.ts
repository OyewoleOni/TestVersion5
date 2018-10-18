import { Injectable } from '@angular/core';
import { TodoListService, Todo } from './TodoList.service';

@Injectable()
export class TodoListPrivateService implements TodoListService {

  constructor() { }

  getTodos() {

    const todos: Todo[] = [

      {

        title: 'secret',

        description: 'All of my deepest, darkest secrets.',

        done: false

      }

    ];



    return todos;

  }

}
