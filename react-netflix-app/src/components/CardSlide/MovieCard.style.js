import styled from "styled-components";

export const MovieCardContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;

  position: relative;

  margin-right: 10px;
`;

export const MovieCardWrapper = styled.div``;

export const MovieCardImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.1s ease-out;
  cursor: pointer;

  &.hover {
    transform: scale(1.2) translateY(-50px);
    z-index: 1;
  }
`;
