import styled, { keyframes } from "styled-components";

const SmallModalWrapper = styled.div``;
const popup = (props) => keyframes`
    0% {
      width: ${props.width}px;
      top: ${props.offsetTop}px;
      left: ${props.offsetLeft}px;
    }
    100% {
      width: ${props.popupWidth}px;
      top: ${props.popupTopOffset}px;
      left: ${props.popupLeftOffset}px;
    }
`;
const SmallModalContainer = styled.div`
  width: ${(props) => props.width}px;
  top: ${(props) => props.offsetTop}px;
  left: ${(props) => props.offsetLeft}px;
  transform-origin: center center;
  transform: none;
  z-index: 30;
  opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
  position: absolute;
  animation: ${(props) => popup(props)} 0.2s;
  animation-fill-mode: forwards;
  background-color: rgb(27, 27, 27);
`;

const SmallModalImg = styled.img`
  width: 100%;
`;
const SmallModalInfo = styled.div`
  height: ${(props) => props.popupInfoHeight}px;
  color: white;
  white-space: pre-line;
`;

export { SmallModalWrapper, SmallModalContainer, SmallModalImg, SmallModalInfo };
