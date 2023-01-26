import React from "react";

import { FooterContainer, IconWrapper, MenuWrapper } from "./Footer.style";
import facebookLogo from "assets/facebook.svg";
import instagramLogo from "assets/instagram.svg";
import twitterLogo from "assets/twitter.svg";
import youtubeLogo from "assets/youtube.svg";

const footerMenus = [
  "화면 해설",
  "고객 센터",
  "미디어 센터",
  "기프트카드",
  "투자 정보(IR)",
  "입사 정보",
  "이용 약관",
  "개인정보",
  "법적 고지",
  "쿠키 설정",
  "회사 정보",
  "문의하기",
];

const MenuList = () => {
  return footerMenus.map((menu) => <li key={menu}>{menu}</li>);
};

const Footer = () => {
  return (
    <FooterContainer>
      <IconWrapper>
        <img src={facebookLogo} alt="facebook logo" />
        <img src={instagramLogo} alt="instagram logo" />
        <img src={twitterLogo} alt="twitter logo" />
        <img src={youtubeLogo} alt="youtube logo" />
      </IconWrapper>
      <MenuWrapper>
        <MenuList />
      </MenuWrapper>
    </FooterContainer>
  );
};

export default Footer;
