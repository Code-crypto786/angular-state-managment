import { Store, StoreConfig } from '@datorama/akita';
import { Todo } from '../todo.model';
import { Injectable } from '@angular/core';
export interface TodoState {
  Todos: Todo[];
  isLoaded: boolean;
}
export const getInitialState = () => {
  return {
    Todos: [],
    isLoaded: false,
  };
};

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'todo' })
export class TodoStore extends Store<TodoState> {
  constructor() {
    super(getInitialState());
  }
}
