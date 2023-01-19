import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  aspect-ratio: 3/1;
`;

function Banner({ movie }) {
  return <StyledDiv>이곳에 배너가 표시됩니다.{movie.id}</StyledDiv>;
}

export default Banner;
