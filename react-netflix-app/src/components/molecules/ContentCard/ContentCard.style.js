import styled from "styled-components";

export const ContentCardContainer = styled.li`
  position: relative;
  width: ${(props) => 90 / props.cardsPerGroup}vw;
  height: ${(props) => 50 / props.cardsPerGroup}vw;
  z-index: 10;
  cursor: pointer;
  overflow: hidden;
`;

export const ContentCardImage = styled.img`
  width: 100%;
  /* height: ${(props) => 60 / props.cardsPerGroup}vw; */
`;

export const ContentTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 70%;
  left: 5%;
  width: 50%;
  height: 25%;
  text-shadow: 1px 1px 2px #000;
`;
