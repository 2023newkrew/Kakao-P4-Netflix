import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export default createGlobalStyle`
  ${reset}

  body {
    color: white;
    background-color: black;
  }

  img {
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
  }

  svg {
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
    fill: ${(props) => props.fill || 'white'};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
