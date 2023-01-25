import styled from "styled-components";

const CheckTopDiv = styled.div`
  position: absolute;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 68px;
  padding: 0 5%;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  background-color: ${(props) => (props.isTop ? "transparent" : "rgb(20, 20, 20)")};
  color: white;
  font-size: 11px;
  width: 100%;
  position: ${(props) => (props.isTop ? "absolute" : "fixed")};
  transition: background-color 0.4s;
  z-index: 50;
`;

export { CheckTopDiv, HeaderContainer };
