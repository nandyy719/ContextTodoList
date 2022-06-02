
export interface Todo{
    id: number;
    text: string;
    day: string;
    reminder: boolean;
}
export interface NewTodo{ //helper type for use when adding a new todo to server (since server automatically assigns a new id)
    text: string;
    day: string;
    reminder: boolean;
}
export interface TodoList{
    todos: Todo[];
}

export enum ActionType{
    AddTodo,
    DeleteTodo,
    ToggleReminder,
    SetTodos,
}
export interface AddTodo{
  type: ActionType.AddTodo;
  payload: Todo;
}

export interface DeleteTodo{
    type: ActionType.DeleteTodo;
    payload: number;
}

export interface ToggleReminder{
    type: ActionType.ToggleReminder;
    payload: Todo;
}

export interface SetTodos{
    type: ActionType.SetTodos;
    payload: TodoList;
}

export type TodoActions = AddTodo | DeleteTodo | ToggleReminder | SetTodos;

