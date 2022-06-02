import React, { useContext } from 'react'
import {FaTimes} from 'react-icons/fa';
import { deleteTodo, toggleReminder } from '../ServerFunctions';
import { TodoContext } from '../TodoContext';
import { ActionType, Todo } from '../TodoState';
const deleteStyle = {
    color: 'red',
    cursor: 'pointer'
}

const reminderStyle = {
    borderLeft: '3px solid red',
    cursor: 'pointer'
}
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
    <div className='todo' onDoubleClick={() => onToggle(todo.id)}  style= {todo.reminder ? reminderStyle : {cursor: 'pointer'}}>
        <h3>
            {todo.text} <FaTimes style={deleteStyle} onClick = {() => onDelete(todo.id)}/>
        </h3>
        <p>{todo.day}</p>
    </div>
  )
}

export default TodoComponent;


