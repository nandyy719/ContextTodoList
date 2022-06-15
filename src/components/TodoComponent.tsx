import React, { useContext } from 'react'
import {FaTimes} from 'react-icons/fa';
import styled from 'styled-components';
import { deleteTodo, toggleReminder } from '../ServerFunctions';
import { TodoContext } from '../TodoContext';
import { ActionType, Todo } from '../TodoState';

const deleteStyle = {
    color: 'red',
    cursor: 'pointer'
}

interface TodoContainerProps{
    reminder: boolean;
}

const TodoContainer = styled.div<TodoContainerProps>`
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 30vw;
    cursor: pointer;
    padding-left: 5px;
    border-left: ${(props: TodoContainerProps) => props.reminder ? '3px solid red' : 'none'};
    margin: 1vh auto;
    overflow: auto;
`;



const TodoComponent: React.FC<Todo> = (todo) => {

  const {dispatch} = useContext(TodoContext);
  const onToggle = async(id: number) => {
      const updatedTodo = await toggleReminder(id);
      dispatch({type: ActionType.ToggleReminder, payload: updatedTodo}); 
  }
  const onDelete = async(id: number) => {
      deleteTodo(id);
      dispatch({type: ActionType.DeleteTodo, payload: id});
  }

  return (
    <TodoContainer onDoubleClick={() => onToggle(todo.id)}  reminder= {todo.reminder}>
        <h3>
            {todo.text} <FaTimes style={deleteStyle} onClick = {() => onDelete(todo.id)}/>
        </h3>
        <p>{todo.day}</p>
    </TodoContainer>
  );
}

export default TodoComponent;


