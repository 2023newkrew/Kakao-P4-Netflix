import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export default createGlobalStyle`
  ${reset}

  body {
    color: white;
  }

  svg {
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
    fill: ${(props) => props.fill || 'white'};
  }
`;
