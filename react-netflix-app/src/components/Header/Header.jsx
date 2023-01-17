import React from "react";

import {
  HeaderContainer,
  HaderContent,
  Nav,
  NavItem,
  NavTabs,
  NavTab,
  Logo,
  BorderImage,
} from "components/Header/Header.style";

import logoImage from "assets/logo.png";
import notiImage from "assets/noti.svg";
import userImage from "assets/user.png";

const Header = ({}) => {
  const navTabs = () => {
    // 이런거 어디에서 관리하지!?
    const tabList = [
      "홈",
      "시리즈",
      "영화",
      "NEW! 요즘 대세 콘텐츠",
      "내가 찜한 콘텐츠",
      "언어별로 찾아보기",
    ];
    return (
      <NavTabs>
        {tabList.map((tabText, index) => {
          return (
            <NavTab key={index}>
              <a href="/#">{tabText}</a>
            </NavTab>
          );
        })}
      </NavTabs>
    );
  };

  return (
    <HeaderContainer>
      <HaderContent>
        <Nav>
          <NavItem>
            <Logo href="/#">
              <img src={logoImage} alt="logo" />
            </Logo>
          </NavItem>
          <NavItem>{navTabs()}</NavItem>
        </Nav>
        <Nav>
          <NavItem>Search</NavItem>
          <NavItem>
            <a href="/#">키즈</a>
          </NavItem>
          <NavItem>
            <button type="button">
              <img src={notiImage} alt="noti" />
            </button>
          </NavItem>
          <NavItem>
            <button type="button">
              <BorderImage src={userImage} alt="user profile" radius="4px" />
            </button>
          </NavItem>
        </Nav>
      </HaderContent>
    </HeaderContainer>
  );
};

export default Header;
