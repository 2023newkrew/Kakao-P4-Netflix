import React from "react";
import searchIcon from "../../../assets/searchIcon.svg";
import bellIcon from "../../../assets/bellIcon.svg";

import { HeaderRightContainer, SettingContainer, Caret, HeaderRightButton, HeaderRightImg } from "./styles";

export default function HeaderRight() {
  return (
    <HeaderRightContainer>
      <div className="header-right__search">
        <HeaderRightButton>
          <HeaderRightImg src={searchIcon} />
        </HeaderRightButton>
      </div>
      <div className="header-right__kids">
        <a>키즈</a>
      </div>
      <div className="header-right__alarm">
        <HeaderRightButton>
          <HeaderRightImg src={bellIcon} />
        </HeaderRightButton>
      </div>
      <SettingContainer className="header-right__setting">
        <div className="header-right__setting__icon">
          <a>프로필사진</a>
        </div>

        <Caret className="caret"></Caret>
      </SettingContainer>
    </HeaderRightContainer>
  );
}
