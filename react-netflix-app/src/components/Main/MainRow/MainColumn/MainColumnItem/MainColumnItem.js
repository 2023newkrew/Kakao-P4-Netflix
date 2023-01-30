import React, { useEffect, useRef, useState } from "react";
import TheMovieDBAPI from "../../../../../util/class/TheMovieDBAPI";
import useModal from "../../../../../util/hooks/useModal";
import SmallModal from "../../../../Modal/SmallModal/SmallModal";
import { MainColumnItemContainer, MainColumnItemImg } from "./styles";
import ModalPortal from "../../../../../util/components/ModalPortal";
import BigModal from "../../../../Modal/BigModal/BigModal";
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
  movieId,
  title,
  imgSrc,
  setImageContainerSize,
  separateCount,
  voteAverage,
  voteCount,
  releaseDate,
  index,
  overViewInfo,
}) {
  const DELAY = 1000;
  const imageContainerRef = useRef(null);
  const [imageContainerRectInfo, setImageContainerRectInfo] = useState(null);
  const { isModalOpen: isSmallModalOpen, toggle: smallModalToggle } = useModal();
  const { isModalOpen: isBigModalOpen, toggle: bigModalToggle } = useModal();
  useTimeOutEvent(imageContainerRef, "mouseenter", smallModalToggle, "mouseleave", DELAY);

  useEffect(() => {
    /* 각 MainColumn의 첫 번째 아이템이면 setImageContainerSize(MainRow에서 소유)를 가지고 있음 */
    /* 단순히 보기 편하기 위해 useEffect를 나누었음*/
    if (!setImageContainerSize) return;

    const handleResize = () => {
      setImageContainerSize(imageContainerRef.current.clientWidth);
    };
    handleResize();
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
        <MainColumnItemImg src={TheMovieDBAPI.IMG_BASE_URL + imgSrc} />
      </MainColumnItemContainer>

      {isSmallModalOpen && imageContainerRectInfo ? (
        <ModalPortal>
          <SmallModal
            imgSrc={TheMovieDBAPI.IMG_BASE_URL + imgSrc}
            toggle={smallModalToggle}
            info={`vote_average : ${voteAverage}
            vote_count : ${voteCount}
            release_date : ${releaseDate}`}
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
            onClickPost={bigModalToggle}
          />
        </ModalPortal>
      ) : null}
      {isBigModalOpen ? (
        <ModalPortal>
          <BigModal
            movieId={movieId}
            toggle={bigModalToggle}
            title={title}
            voteAverage={voteAverage}
            overViewInfo={overViewInfo}
          />
        </ModalPortal>
      ) : null}
    </>
  );
}
