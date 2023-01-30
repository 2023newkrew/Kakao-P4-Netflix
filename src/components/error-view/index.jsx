import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 2rem;
  font-weight: 900;
`;

function ErrorView({ error }) {
  return <StyledDiv>{`${error.name}: ${error.message}`}</StyledDiv>;
}

export default ErrorView;
