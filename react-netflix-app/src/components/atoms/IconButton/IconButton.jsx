import React from "react";
import { IconButtonContainer, ButtonIcon, ButtonText } from "./IconButton.style";

// 추후 테마별로 색상 지정해주기
// default props 설정
const IconButton = ({ iconImage, text, theme, handleOnClick }) => {
  return (
    <IconButtonContainer color={theme === "white" ? "black" : "white"} backgroundColor={theme}>
      <ButtonIcon
        src={iconImage}
        invertFilter={theme === "white" ? "invert(0)" : "invert(1)"}
      ></ButtonIcon>
      <ButtonText>{text}</ButtonText>
    </IconButtonContainer>
  );
};

export default IconButton;
