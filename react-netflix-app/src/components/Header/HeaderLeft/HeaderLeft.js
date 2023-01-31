import React from "react";
import logo from "../../../assets/netflixLogo.svg";
import { HeaderLeftContainer, LogoContainer, LogoImg, UnOrderedList, ListItem } from "./styles.js";
import { useNavigate } from "react-router-dom";
export default function HeaderLeft() {
  const navigate = useNavigate();
  return (
    <HeaderLeftContainer>
      <LogoContainer className="logo">
        <LogoImg src={logo} onClick={() => navigate(`/`)} />
      </LogoContainer>
      <UnOrderedList>
        <ListItem>
          <a href="#!">홈</a>
        </ListItem>
        <ListItem>
          <a href="#!">시리즈</a>
        </ListItem>
        <ListItem>
          <a href="#!">영화</a>
        </ListItem>
        <ListItem>
          <a href="#!">New! 요즘 대세 콘텐츠</a>
        </ListItem>
        <ListItem>
          <a href="#!">내가 찜한 콘텐츠</a>
        </ListItem>
        <ListItem>
          <a href="#!">언어별로 찾아보기</a>
        </ListItem>
      </UnOrderedList>
    </HeaderLeftContainer>
  );
}
