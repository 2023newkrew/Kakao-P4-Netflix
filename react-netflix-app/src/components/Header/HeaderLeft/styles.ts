import styled from "styled-components";

const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
  & a {
    text-decoration: none;
    color: white;
  }
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const LogoImg = styled.img`
  height: 30px;
`;

const UnOrderedList = styled.ul`
  list-style-type: none;
  display: flex;
`;
const ListItem = styled.ul`
  margin-right: 10px;
  margin-left: 5px;
`;
export { HeaderLeftContainer, LogoContainer, LogoImg, UnOrderedList, ListItem };
