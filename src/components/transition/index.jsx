import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  will-change: opacity, transform;
  animation: 0.6s ease ${({ animationName }) => animationName} forwards;
  @keyframes swip-out {
    to {
      opacity: 0;
      transform: translateX(-100%);
    }
  }

  @keyframes swip-in {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;

function Transition({ children }) {
  const ref = useRef(children);

  const [currentChildren, setCurrentChildren] = useState(children);
  const [previousChildren, setPreviousChildren] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);

  useEffect(() => {
    if (ref.current.key !== children.key) {
      setCurrentChildren(children);
      setPreviousChildren(ref.current);
      setIsSwiping(true);
    }

    return () => {
      ref.current = children;
    };
  }, [children]);

  return (
    <>
      <StyledDiv
        animationName={isSwiping ? 'swip-in' : 'none'}
        key={currentChildren.key}
      >
        {currentChildren}
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
