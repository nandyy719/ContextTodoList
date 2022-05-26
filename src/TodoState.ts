
export interface Todo{
    id: number;
    text: string;
    day: string;
    reminder: boolean;
}

export interface TodoList{
    todos: Todo[];
}

