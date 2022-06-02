import React from 'react'

interface HeaderProps{
    showForm: boolean;
    onToggle: () => void;
}



const Header: React.FC<HeaderProps> = ({showForm, onToggle}) => {
  return (
    <div>
      <header className='header'>
          <h1>Todo List</h1>
          <button style= {showForm ? {backgroundColor: 'red'} : {backgroundColor: 'green'}} className= 'btn' onClick={onToggle}>
              {showForm ? 'Hide' : 'Show Form'}
          </button>
      </header>
    </div>
  )
}

export default Header
