import { Action } from "history";
import { toEditorSettings } from "typescript";
import { ActionType, TodoActions, TodoList } from "./TodoState";

export function todoReducer(state: TodoList, action: TodoActions): TodoList{
    switch (action.type){
        case ActionType.AddTodo:
            return {todos: [...state.todos, action.payload]};
        case ActionType.DeleteTodo:
            return {todos: state.todos.filter((todo) => todo.id !== action.payload)};
        case ActionType.ToggleReminder:
            return {todos: state.todos.map((todo) => todo.id === action.payload.id ? {...todo, reminder: action.payload.reminder} : todo)};
        case ActionType.SetTodos:
            return {todos: action.payload.todos};
        default:
            return state;
    }
}