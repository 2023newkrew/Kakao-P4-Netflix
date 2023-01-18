import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  :root {
    font-size: 10px;
  }
  @media screen and (max-width : 1100px){
    :root {font-size: 6px} 
  }
`;

export default GlobalStyle;