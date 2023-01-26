import React from "react";
import { NavTab, NavTabList } from "components";

import {
  HeaderContainer,
  HeaderContent,
  Nav,
  NavItem,
  NavTabs,
  Logo,
  BorderImage,
} from "components/organisms/Header/Header.style";

import logoImage from "assets/logo.png";
import notiImage from "assets/noti.svg";
import userImage from "assets/user.png";

const tabList = [
  { text: "홈", path: "/#" },
  { text: "시리즈", path: "/#" },
  { text: "영화", path: "/#" },
  { text: "NEW! 요즘 대세 콘텐츠", path: "/#" },
  { text: "내가 찜한 콘텐츠", path: "/#" },
  { text: "언어별로 찾아보기", path: "/#" },
];

const Header = ({}) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Nav>
          <NavItem>
            <Logo href="/#">
              <img src={logoImage} alt="logo" />
            </Logo>
          </NavItem>
          <NavItem>
            <NavTabList tabs={tabList} />
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>Search</NavItem>
          <NavTab path="/#" tabText="키즈" />
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
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
