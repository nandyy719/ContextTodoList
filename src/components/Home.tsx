import { createContext, Dispatch, SetStateAction, useEffect, useReducer, useState } from "react"
import styled from "styled-components";
import { fetchTodos } from "../ServerFunctions";
import { initialTodoState, TodoContext } from "../TodoContext"
import { todoReducer } from "../TodoReducer"
import { ActionType } from "../TodoState";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import Header from "./Header";
import Todos from "./Todos";

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100vw;
    height: 100vh;
    overflow: auto;
`;
export default function Home() {
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {setShowForm(!showForm)};
    
    return (
        <Container>
            <Header showForm= {showForm} onToggle= {toggleForm} />
            {showForm && <AddTodo />}
            <Todos />
            <Footer />
        </Container>
    )
}
