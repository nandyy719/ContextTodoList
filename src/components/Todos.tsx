import { useContext, useEffect } from "react"
import { getPreEmitDiagnostics } from "typescript";
import { fetchTodos } from "../ServerFunctions";
import { TodoContext } from "../TodoContext"
import { ActionType, TodoList } from "../TodoState";
import TodoComponent from "./TodoComponent";

export default function Todos() {
    const {state, dispatch} = useContext(TodoContext);
    useEffect(() => {
        const getTodos = async () => {
            const serverTodos = await fetchTodos();
            dispatch({type: ActionType.SetTodos, payload: serverTodos});
            
        }
        getTodos();
        }, []); 
  return (
      <>
        {state.todos.length > 0 ? state.todos.map((todo) => 
            <TodoComponent key= {todo.id} id= {todo.id} text= {todo.text} day= {todo.day} reminder= {todo.reminder}/>
        ) : <h3>No Todos</h3>}
      </>
  )
}
