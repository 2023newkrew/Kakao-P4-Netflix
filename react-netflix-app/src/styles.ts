import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  body {
    background-color: rgb(20, 20, 20);
  }
`;

export { GlobalStyle };
