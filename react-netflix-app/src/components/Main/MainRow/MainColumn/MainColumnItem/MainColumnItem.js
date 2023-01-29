import React, { useEffect, useRef, useState } from "react";
import TheMovieDBAPI from "../../../../../util/class/TheMovieDBAPI";
import useModal from "../../../../../util/hooks/useModal";
import SmallModal from "../../../../SmallModal/SmallModal";
import { MainColumnItemContainer, MainColumnItemImg } from "./styles";
import ModalPortal from "../../../../../util/components/ModalPortal";
import BigModal from "../../../../BigModal/BigModal";
import useTimeOutEvent from "../../../../../util/hooks/useTimeOutEvent";

const POPUP_MULTIPLE_VALUE = 1.3;
const POPUP_INFO_HEIGHT = 70;

const getPopUpTopOffset = (containerTop, containerHeight, scrollY) => {
  return containerTop + scrollY - (containerHeight * (POPUP_MULTIPLE_VALUE - 1)) / 2 - POPUP_INFO_HEIGHT / 2;
};

const getPopUpLeftOffset = (containerLeft, containerWidth, index, separateCount) => {
  if (index % separateCount === 0) {
    // left end
    return containerLeft;
  } else if (index % separateCount === separateCount - 1) {
    // right end
    return containerLeft - containerWidth * (POPUP_MULTIPLE_VALUE - 1);
  } else {
    // mid
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
  const DELAY = 1000;
  const imageContainerRef = useRef(null);
  const [imageContainerRectInfo, setImageContainerRectInfo] = useState(null);
  const [isSmallModalOpen, smallModalToggle] = useModal();
  const [isBigModalOpen, bigModalToggle] = useModal();
  useTimeOutEvent(imageContainerRef, "mouseenter", smallModalToggle, "mouseleave", DELAY);

  useEffect(() => {
    /* 각 MainColumn의 첫 번째 아이템이면 setImageContainerSize(MainRow에서 소유)를 가지고 있음 */
    /* 단순히 보기 편하기 위해 useEffect를 나누었음*/
    if (!setImageContainerSize) return;
    setImageContainerSize(imageContainerRef.current.clientWidth);

    const handleResize = (event) => {
      setImageContainerSize(imageContainerRef.current.clientWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      /* 클릭 이벤트가 모달 외부로 전파되어 다시 toggle 되는 현상을 막기 위함 */
      event.stopPropagation();
      bigModalToggle();
    };
    imageContainerRef.current.addEventListener("click", handleClick);

    return () => imageContainerRef.current.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (isSmallModalOpen === false) return;
    setImageContainerRectInfo(imageContainerRef.current.getBoundingClientRect());
  }, [isSmallModalOpen]);

  return (
    <>
      <MainColumnItemContainer ref={imageContainerRef} separateCount={separateCount}>
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
