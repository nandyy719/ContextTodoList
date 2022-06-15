import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledFooter = styled.footer`
//margin-top: 2em;
text-align: center;
display: flex;
overflow: auto;
align-content: center;
`;
const Paragraph = styled.p`
flex: 1;
margin-right: 3em;
`;
export default function Footer() {

  return (
    <StyledFooter>
      <Paragraph>Copyright &copy; 2022 </Paragraph>
      <Link to = '/about'>About</Link>
    </StyledFooter>
  )
}