import styled from "styled-components";

const MainPostImg = styled.img`
  width: 100%;
  height: 56.25vw;
  position: absolute;
  z-index: -1;
`;

const MainPostContainer = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
  padding-bottom: 40%;
  margin-bottom: 20px;
`;

const MainPostLeftShadow = styled.div`
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6), transparent 85%);
  bottom: 0;
  left: 0;
  opacity: 1;
  position: absolute;
  right: 26.09%;
  top: 0px;
  transition: opacity 0.5s;
  height: 56.25vh;
`;

const MainPostBottomShadow = styled.div`
  background-color: transparent;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 8%, 0) 0,
    hsla(0, 0%, 8%, 0.15) 15%,
    hsla(0, 0%, 8%, 0.35) 29%,
    hsla(0, 0%, 8%, 0.58) 44%,
    #141414 68%,
    #141414
  );
  background-position: 0 top;
  background-repeat: repeat-x;
  background-size: 100% 100%;
  bottom: -22vh;
  height: 14.7vw;
  opacity: 1;
  top: auto;
  width: 100%;
  position: absolute;
`;

export { MainPostContainer, MainPostImg, MainPostLeftShadow, MainPostBottomShadow };
