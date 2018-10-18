
import { Injectable } from '@angular/core';

export interface Todo {

  title: string;

  description: string;

  done: boolean;

}



@Injectable()

export abstract class TodoListService {

  /**

   * Returns a list of all of the current user's todos.

   */

  abstract getTodos(): Todo[];

}