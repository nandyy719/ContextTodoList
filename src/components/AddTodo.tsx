import React, { useContext, useState } from "react";
import styled from "styled-components";
import { addTodo } from "../ServerFunctions";
import { TodoContext } from "../TodoContext";
import { ActionType, NewTodo, Todo } from "../TodoState";

const Form = styled.form`
    //display: flex;
    //flex-direction: column;
    //height: 17vh;
    //justify-content: space-between;
   // align-items: center;
    //margin-top: 2vh;
    //margin-bottom: 4vh;
    overflow: auto;
`;

const FormControl = styled.div`
    //display: flex;
    //flex-direction: column;
    //width: 15vw;
    //justify-content: space-between;
    //align-items: center;
    &#set-reminder {
    //flex-direction: row;
    //width: 8vw;
    }
`;
const Label = styled.label`
    font-weight: 600; 
    margin-bottom: 1vh;
    margin-top: 1vh;
    font-size: 1em;
    margin-right: 1vw;
`
const TextInput = styled.input.attrs({type: 'text'})`
    width: 100%;
    padding: 1vh 0.5vw;
    font-size: 1em;
`;
const Submit = styled.input.attrs({
        type: 'submit',
        value: 'Add Todo'
})`
  background-color: #4278f5;
  color: white;
  border: none;
  padding: 1vh 1.5vw;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  &:hover{
      padding: 1.5vh 2vw;
  }
`;
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
      <Form onSubmit={onSubmit}>
          
          <FormControl>
              <Label>Todo</Label>
              <TextInput placeholder= 'Add Todo' value = {text} onChange= {(e: any) => setText(e.target.value)} />
          </FormControl>

          <FormControl>
              <Label>Day and Time</Label>
              <TextInput placeholder= 'Add Day and Time' value = {day} onChange= {(e: any) => setDay(e.target.value)} />
          </FormControl>

          <FormControl id= 'set-reminder'>
              <Label>Set Reminder</Label>
              <input type= 'checkbox' checked= {reminder} onChange= {(e) => setReminder(e.currentTarget.checked)} />
          </FormControl>
        <Submit />

      </Form>
  )
}


