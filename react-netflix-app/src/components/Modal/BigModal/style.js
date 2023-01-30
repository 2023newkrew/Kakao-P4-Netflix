import styled from "styled-components";

const BigModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  background-color: rgba(27, 27, 27, 0.7);
`;

const BigModalContainer = styled.div`
  position: fixed;
  width: 50vw;
  height: 80vh;
  left: 25vw;
  top: 10vh;
  border: 2px solid yellow;
  z-index: 50;
  display: flex;
  flex-direction: column;
`;

const BigModalVideo = styled.iframe`
  height: 50%;
  width: 100%;
`;
const BigModalInfo = styled.div`
  height: 50%;
  width: 100%;
  background-color: rgb(27, 27, 27);
  color: white;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 13px;
`;

export { BigModalBackground, BigModalContainer, BigModalVideo, BigModalInfo };
