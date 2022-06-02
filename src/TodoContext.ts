import {createContext, Dispatch} from "react";
import { TodoList, TodoActions } from "./TodoState";

export const initialTodoState: TodoList = {todos: []};

export const TodoContext = createContext<
{state: TodoList; 
dispatch: Dispatch<TodoActions>;
}>({state: initialTodoState, dispatch: () => {}});
