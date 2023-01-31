import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridLayout = styled.ul`
  display: grid;
  grid-gap: 1vw;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function Grid({ children }) {
  return <GridLayout>{children}</GridLayout>;
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
