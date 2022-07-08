import { styled } from 'solid-styled-components';

const Button = styled.button`
  padding-inline: 16px;
  height: 35px;
  font-family: arial;
  font-size: 18px;
  background-color: white;
  border: none;
  border-radius: 4px;
  background-color: #248F82;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #19665d;
  }
`;

export default Button;
