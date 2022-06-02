import { createContext, Dispatch, SetStateAction, useEffect, useReducer, useState } from "react"
import { fetchTodos } from "../ServerFunctions";
import { initialTodoState, TodoContext } from "../TodoContext"
import { todoReducer } from "../TodoReducer"
import { ActionType } from "../TodoState";
import AddTodo from "./AddTodo";
import Header from "./Header";
import Todos from "./Todos";


export default function Home() {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {setShowForm(!showForm)};
    
    return (
        <>
            <Header showForm= {showForm} onToggle= {toggleForm} />
            {showForm && <AddTodo />}
            <Todos />
        </>
    )
}
