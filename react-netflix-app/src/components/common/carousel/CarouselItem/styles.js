import styled from "styled-components";

const CarouselItemContainer = styled.div`
  width: calc(100% / ${(props) => props.separateCount});
  height: calc(calc(100vw / ${(props) => props.separateCount}) / 2);
  padding-left: 0.2vw;
  padding-right: 0.2vw;
  object-fit: fill;
  display: flex;
`;

const CarouselItemImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export { CarouselItemContainer, CarouselItemImg };
