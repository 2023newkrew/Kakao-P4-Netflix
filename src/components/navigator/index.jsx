import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  padding: 1rem var(--lr-padding);
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5rem;
  transition: background-color 0.2s;
  z-index: 2;
  ${({ isTop }) => (isTop ? '' : 'background-color: black;')}
`;

const rootElement = document.body.querySelector('#root');

function Navigator() {
  const [isTop, setIsTop] = useState(!window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(!rootElement.scrollTop);
    };

    rootElement.addEventListener('scroll', handleScroll);
    return () => {
      rootElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <StyledDiv isTop={isTop}>넷플릭스™️</StyledDiv>;
}

export default Navigator;
