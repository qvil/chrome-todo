import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root{
    width: 300px;
    /* height: 200px; */
  }
  /* body > * {
    all:unset;
  } */
  input {
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;
