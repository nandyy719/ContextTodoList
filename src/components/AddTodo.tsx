import React, { useContext, useState } from "react";
import { addTodo } from "../ServerFunctions";
import { TodoContext } from "../TodoContext";
import { ActionType, NewTodo, Todo } from "../TodoState";

export default function AddTodo() {
     const {dispatch} = useContext(TodoContext);
     const [text, setText] = useState('');
     const [day, setDay] = useState('');
     const [reminder, setReminder] = useState(false);

     const onAdd = async (todo: NewTodo) =>  {
        const addedTodo = await addTodo(todo);
        dispatch({type: ActionType.AddTodo, payload: addedTodo});
     }

     const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();

         if(!text || !day){
             alert('Must have text and day for a todo');
             return;
         }
         onAdd({text, day, reminder});
         setText('');
         setDay('');
         setReminder(false);
     }
  return (
      <form className= 'add-form' onSubmit={onSubmit}>
          
          <div className="form-control">
              <label>Todo</label>
              <input type= 'text' placeholder= 'Add Todo' value = {text} onChange= {(e) => setText(e.target.value)} />
          </div>

          <div className="form-control">
              <label>Day and Time</label>
              <input type= 'text' placeholder= 'Add Day and Time' value = {day} onChange= {(e) => setDay(e.target.value)} />
          </div>

          <div className="form-control">
              <label>Set Reminder</label>
              <input type= 'checkbox' checked= {reminder} onChange= {(e) => setReminder(e.currentTarget.checked)} />
          </div>
        <input type="submit" value= 'Add Todo' />

      </form>
  )
}


