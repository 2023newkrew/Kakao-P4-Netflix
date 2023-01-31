import React, { useCallback, useRef } from "react";
import useAddEventListener from "../../../util/hooks/useAddEventListener";
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
  onClickPost,
}) {
  const modalContainerRef = useRef(null);
  useAddEventListener(modalContainerRef, "mouseleave", toggle);

  const handleClick = useCallback(
    (event) => {
      /* 클릭 이벤트가 모달 외부로 전파되어 다시 toggle 되는 현상을 막기 위함 */
      event.stopPropagation();
      onClickPost();
    },
    [onClickPost]
  );

  return (
    <SmallModalWrapper>
      <SmallModalContainer
        {...{ offsetLeft, offsetTop, width, height, popupWidth, popupTopOffset, popupLeftOffset, popupInfoHeight }}
        ref={modalContainerRef}
      >
        <SmallModalImg src={imgSrc} onClick={handleClick} />
        <SmallModalInfo>{info}</SmallModalInfo>
      </SmallModalContainer>
    </SmallModalWrapper>
  );
}
