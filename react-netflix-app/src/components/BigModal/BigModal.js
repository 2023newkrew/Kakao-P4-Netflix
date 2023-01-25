import React from "react";
import { useEffect } from "react";
import { BigModalBackground, BigModalContainer, BigModalImage, BigModalInfo } from "./style";

export default function BigModal({ imgSrc, toggle }) {
  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.closest("#bigModalContainer")) return;
      toggle();
    };
    document.addEventListener("click", handleClick);
  }, []);
  return (
    <BigModalBackground>
      <BigModalContainer id="bigModalContainer">
        <BigModalImage src={imgSrc} />
        <BigModalInfo>This is ~~</BigModalInfo>
      </BigModalContainer>
    </BigModalBackground>
  );
}
