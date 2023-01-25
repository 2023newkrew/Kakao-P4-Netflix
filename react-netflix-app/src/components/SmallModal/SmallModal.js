import React, { useEffect, useRef, useState } from "react";
import { SmallModalContainer, SmallModalImg, SmallModalInfo, SmallModalWrapper } from "./styles";

export default function SmallModal({
  imgSrc,
  offsetLeft,
  offsetTop,
  imageContainerWidth,
  imageContainerHeight,
  toggle,
  vote_average,
  vote_count,
  release_date,
}) {
  const modalContainerRef = useRef(null);
  useEffect(() => {
    modalContainerRef.current.addEventListener("mouseleave", toggle);
  });

  return (
    <SmallModalWrapper>
      <SmallModalContainer
        offsetLeft={offsetLeft}
        offsetTop={offsetTop}
        imageContainerWidth={imageContainerWidth}
        imageContainerHeight={imageContainerHeight}
        scrollY={window.scrollY}
        ref={modalContainerRef}
      >
        <SmallModalImg src={imgSrc} />
        <SmallModalInfo>
          vote_average : {vote_average} <br />
          vote_count : {vote_count}
          <br />
          release_date : {release_date}
        </SmallModalInfo>
      </SmallModalContainer>
    </SmallModalWrapper>
  );
}
