import React, { useEffect, useRef, useState } from "react";
import TheMovieDBAPI from "../../../../../util/TheMovieDBAPI";
import useModal from "../../../../../util/useModal";
import SmallModal from "../../../../SmallModal/SmallModal";
import { MainColumnItemContainer, MainColumnItemImg } from "./styles";
import ReactDom from "react-dom";
import ModalPortal from "../../../../../util/ModalPortal";
import BigModal from "../../../../BigModal/BigModal";

const POPUP_MULTIPLE_VALUE = 1.3;
const POPUP_INFO_HEIGHT = 70;

const getPopUpTopOffset = (containerTop, containerHeight, scrollY) => {
  return containerTop + scrollY - (containerHeight * (POPUP_MULTIPLE_VALUE - 1)) / 2 - POPUP_INFO_HEIGHT / 2;
};
const getPopUpLeftOffset = (containerLeft, containerWidth, index, separateCount) => {
  // left end
  if (index % separateCount === 0) {
    return containerLeft;
  } else if (index % separateCount === separateCount - 1) {
    return containerLeft - containerWidth * (POPUP_MULTIPLE_VALUE - 1);
  } else {
    return containerLeft - (containerWidth * (POPUP_MULTIPLE_VALUE - 1)) / 2;
  }
};
export default function MainColumnItem({
  imgSrc,
  setImageContainerSize,
  separateCount,
  vote_average,
  vote_count,
  release_date,
  index,
}) {
  const imageContainer = useRef(null);
  const timer = useRef(null);
  const [imageContainerRectInfo, setImageContainerRectInfo] = useState(null);
  const [isSmallModalOpen, smallModalToggle] = useModal();
  const [isBigModalOpen, bigModalToggle] = useModal();

  useEffect(() => {
    let handleResize;

    if (setImageContainerSize) {
      setImageContainerSize(imageContainer.current.clientWidth);

      handleResize = (event) => {
        setImageContainerSize(imageContainer.current.clientWidth);
      };
      window.addEventListener("resize", handleResize);
    }

    const handleMouseEnter = (event) => {
      timer.current = setTimeout(smallModalToggle, 1000);
    };
    const handleMouseLeave = (event) => {
      clearTimeout(timer.current);
    };
    const handleClick = (event) => {
      event.stopPropagation();
      bigModalToggle();
    };

    imageContainer.current.addEventListener("mouseenter", handleMouseEnter);
    imageContainer.current.addEventListener("mouseleave", handleMouseLeave);
    imageContainer.current.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      imageContainer.current.removeEventListener("mouseenter", handleMouseEnter);
      imageContainer.current.removeEventListener("mouseleave", handleMouseLeave);
      imageContainer.current.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (isSmallModalOpen === false) return;
    setImageContainerRectInfo(imageContainer.current.getBoundingClientRect());
  }, [isSmallModalOpen]);

  return (
    <>
      <MainColumnItemContainer ref={imageContainer} separateCount={separateCount}>
        <MainColumnItemImg src={TheMovieDBAPI.imgBaseURL + imgSrc} />
      </MainColumnItemContainer>
      {isSmallModalOpen && imageContainerRectInfo ? (
        <ModalPortal>
          <SmallModal
            imgSrc={TheMovieDBAPI.imgBaseURL + imgSrc}
            toggle={smallModalToggle}
            info={`vote_average : ${vote_average}
            vote_count : ${vote_count}
            release_date : ${release_date}`}
            offsetLeft={imageContainerRectInfo.left}
            offsetTop={imageContainerRectInfo.top + window.scrollY}
            width={imageContainerRectInfo.width}
            height={imageContainerRectInfo.height}
            popupWidth={imageContainerRectInfo.width * POPUP_MULTIPLE_VALUE}
            popupTopOffset={getPopUpTopOffset(
              imageContainerRectInfo.top,
              imageContainerRectInfo.height,
              window.scrollY
            )}
            popupLeftOffset={getPopUpLeftOffset(
              imageContainerRectInfo.left,
              imageContainerRectInfo.width,
              index,
              separateCount
            )}
            popupInfoHeight={POPUP_INFO_HEIGHT}
          />
        </ModalPortal>
      ) : null}
      {isBigModalOpen ? (
        <ModalPortal>
          <BigModal imgSrc={TheMovieDBAPI.imgBaseURL + imgSrc} toggle={bigModalToggle} />
        </ModalPortal>
      ) : null}
    </>
  );
}
