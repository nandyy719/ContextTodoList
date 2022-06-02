import { NewTodo, Todo, TodoList } from "./TodoState";

const URL = 'http://localhost:5500/todos';

export async function fetchTodos() : Promise<TodoList> {
    const res = await fetch(URL);
    const data = await res.json();
    let todoList: TodoList = {todos: []};
    data.forEach((todo: Todo) => {todoList.todos.push(todo)});
    return todoList;
}

export async function fetchTodo(id: number) : Promise<Todo> {
    const res = await fetch(`${URL}/${id}`);
    const data = await res.json();
    return data;
}

export async function deleteTodo(id: number) : Promise<void> {
    await fetch(`${URL}/${id}`, {
        method: 'DELETE'
    });
}

export async function toggleReminder(id: number) : Promise<Todo> {
    let updatedTodo = await fetchTodo(id);
    updatedTodo = {...updatedTodo, reminder: !updatedTodo.reminder};

    const res = await fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedTodo)
    });
    const data = await res.json();
    return data;
}

export async function addTodo(todo: NewTodo) : Promise<Todo> {
    const res = await fetch(`${URL}`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(todo)
    });

    const data = await res.json();
    return data;
}

