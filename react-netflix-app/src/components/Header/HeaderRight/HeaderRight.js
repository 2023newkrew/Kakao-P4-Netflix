import React from "react";
import searchIcon from "../../../assets/searchIcon.svg";
import bellIcon from "../../../assets/bellIcon.svg";

import { HeaderRightContainer, SettingContainer, Caret, HeaderRightButton, HeaderRightImg } from "./styles";
import HeaderInput from "./HeaderInput/HeaderInput";

export default function HeaderRight() {
  return (
    <HeaderRightContainer>
      <HeaderInput />

      <HeaderRightButton>
        <HeaderRightImg src={searchIcon} />
      </HeaderRightButton>

      <a>키즈</a>

      <HeaderRightButton>
        <HeaderRightImg src={bellIcon} />
      </HeaderRightButton>

      <SettingContainer className="header-right__setting">
        <a>프로필사진</a>
        <Caret className="caret"></Caret>
      </SettingContainer>
    </HeaderRightContainer>
  );
}
