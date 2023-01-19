import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: fixed;
  width: 100%;
  padding: 1rem var(--lr-padding);
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5rem;
  transition: background-color 0.2s;
  z-index: 1;
  ${({ isTop }) => (isTop ? '' : 'background-color: black;')}
`;

function Navigator() {
  const [isTop, setIsTop] = useState(!window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(!window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <StyledDiv isTop={isTop}>Netflix</StyledDiv>;
}

export default Navigator;
