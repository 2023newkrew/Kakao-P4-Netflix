import styled from "styled-components";

export const MovieCardContainer = styled.div`
  width: 260px;
  height: 380px;
  overflow: hidden;
  cursor: pointer;

  background-color: rgb(24, 24, 24);
  transition: scale 0.2s;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  :hover {
    scale: 1.2;
  }
`;
