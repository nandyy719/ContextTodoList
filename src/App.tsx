import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { todoReducer } from './TodoReducer';
import { initialTodoState, TodoContext } from './TodoContext';
import { fetchTodos } from './ServerFunctions';
import { ActionType } from './TodoState';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  return (
    <TodoContext.Provider value = {{state, dispatch}}>
      <Router>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/about' element = {<About />} />
        </Routes>
      </Router>
    </TodoContext.Provider>
  );
}

export default App;
