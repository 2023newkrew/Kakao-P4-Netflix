import styled from "styled-components";

const HeaderRightContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  & a {
    text-decoration: none;
    color: white;
  }
`;

const Caret = styled.span`
  border-color: #fff transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  height: 0;
  margin-left: 10px;
  transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
  width: 0;
`;
const SettingContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  &:hover ${Caret} {
    transform: rotate(180deg);
  }
`;
const HeaderRightButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 10px;
`;

const HeaderRightImg = styled.img`
  filter: invert(100%);
`;

export { HeaderRightContainer, SettingContainer, Caret, HeaderRightButton, HeaderRightImg };
