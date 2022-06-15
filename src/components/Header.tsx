import React from 'react'
import styled from 'styled-components';

interface HeaderProps{
    showForm: boolean;
    onToggle: () => void;
}
interface ButtonProps{
    showForm: boolean;
}
const Button = styled.button<ButtonProps>`
  background-color: ${(props: ButtonProps) => props.showForm ? '#fc0324' : '#05a155' };
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 30%;
  cursor: pointer;
  font-size: 0.9em;
  &:hover{
    transform: scale(1.2);
  }
  margin-left: 33%;
  margin-top: 3%;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  overflow: auto;
`;

const Header: React.FC<HeaderProps> = ({showForm, onToggle}) => {
  return (
      <HeaderContainer>
          <h1>Todo List</h1>
          <Button onClick={onToggle} showForm= {showForm}>
              {showForm ? 'Hide' : 'Show Form'}
          </Button>
      </HeaderContainer>

  )
}

export default Header
