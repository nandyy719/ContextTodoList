import { Todo, TodoList } from "./TodoState";

const URL = 'http://localhost:5500/todos';

export async function fetchTodos() : Promise<TodoList> {
    const res = await fetch(URL);
    const data = await res.json();
    return data;

}