import React, { useEffect, useRef, useState } from "react";
import { SmallModalContainer, SmallModalImg, SmallModalInfo, SmallModalWrapper } from "./styles";

export default function SmallModal({
  imgSrc,
  toggle,
  info,
  width,
  height,
  offsetLeft,
  offsetTop,
  popupWidth,
  popupTopOffset,
  popupLeftOffset,
  popupInfoHeight,
}) {
  const modalContainerRef = useRef(null);
  useEffect(() => {
    modalContainerRef.current.addEventListener("mouseleave", toggle);
  });

  return (
    <SmallModalWrapper>
      <SmallModalContainer
        {...{ offsetLeft, offsetTop, width, height, popupWidth, popupTopOffset, popupLeftOffset, popupInfoHeight }}
        ref={modalContainerRef}
      >
        <SmallModalImg src={imgSrc} />
        <SmallModalInfo>{info}</SmallModalInfo>
      </SmallModalContainer>
    </SmallModalWrapper>
  );
}
