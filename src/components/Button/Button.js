import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.color.primary};
  color: ${props => props.theme.color.primary};
  background-color: #fff;
`;

export default Button;
