import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  will-change: opacity, transform, filter;
  animation: 0.6s ease ${({ animationName }) => animationName} forwards;
  @keyframes swip-out {
    to {
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes swip-in {
    from {
      opacity: 0;
      /* transform: translateX(100%); */
      filter: blur(4px);
    }
  }
`;

function Transition({ children }) {
  const ref = useRef(children);

  const [previousChildren, setPreviousChildren] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  // getDerivedStateFromProps (https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops)
  if (ref.current.key !== children.key) {
    setPreviousChildren(ref.current);
    setIsSwiping(true);
    ref.current = children;
  }

  return (
    <>
      <StyledDiv
        animationName={isSwiping ? 'swip-in' : 'none'}
        key={children.key}
      >
        {children}
      </StyledDiv>
      {isSwiping ? (
        <StyledDiv
          onAnimationEnd={() => {
            setIsSwiping(false);
          }}
          animationName="swip-out"
          key={previousChildren.key}
        >
          {previousChildren}
        </StyledDiv>
      ) : null}
    </>
  );
}

export default Transition;
