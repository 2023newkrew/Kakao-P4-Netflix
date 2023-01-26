import styled from "styled-components";

const SmallModalWrapper = styled.div``;

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
  animation: popup 0.2s;
  animation-fill-mode: forwards;
  background-color: rgb(27, 27, 27);

  @keyframes popup {
    100% {
      width: ${(props) => props.popupWidth}px;
      top: ${(props) => props.popupTopOffset}px;
      left: ${(props) => props.popupLeftOffset}px;
    }
  }
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
