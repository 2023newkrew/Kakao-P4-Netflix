import styled from "styled-components";
import leftArrowIcon from "../../../assets/leftArrow.svg";
import rightArrowIcon from "../../../assets/rightArrow.svg";

const MainRowContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 60px);
  overflow-x: hidden;
`;
const MainRowSlider = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;

  margin-bottom: 30px;
  transform: translateX(${(props) => props.translateValue * -1}px);
  transition: transform 1s;
`;

const MainRowLeftArrow = styled.div`
  position: absolute;
  width: 4%;
  background-image: url(${leftArrowIcon});
  background-size: 100% 100%;
  height: 100%;
  filter: invert(1);
  top: 0;
  z-index: 10;
  display: ${(props) => (props.isLeftEnd ? "none" : "unset")};
`;

const MainRowRightArrow = styled(MainRowLeftArrow)`
  background-image: url(${rightArrowIcon});
  right: 0px;
  display: ${(props) => (props.isRightEnd ? "none" : "unset")};
`;

export { MainRowContainer, MainRowSlider, MainRowLeftArrow, MainRowRightArrow };
