import React, { useCallback, useEffect, useRef, useState } from "react";
import TheMovieDBAPI from "../../../../../../util/class/TheMovieDBAPI";
import useModal from "../../../../../../util/hooks/useModal";
import SmallModal from "../../../../../Modal/SmallModal/SmallModal";
import { MainColumnItemContainer, MainColumnItemImg } from "./styles";
import BigModal from "../../../../../Modal/BigModal/BigModal";
import useTimeOutEvent from "../../../../../../util/hooks/useTimeOutEvent";
import useAddEventListener from "../../../../../../util/hooks/useAddEventListener";
import ModalPortal from "../../../../../Modal/ModalPortal/ModalPortal";

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
  const MOUSE_OVER_DELAY = 300;
  const imageContainerRef = useRef(null);
  const windowRef = useRef(window);
  const [imageContainerRectInfo, setImageContainerRectInfo] = useState(null);
  const { isModalOpen: isSmallModalOpen, toggle: smallModalToggle } = useModal();
  const { isModalOpen: isBigModalOpen, toggle: bigModalToggle } = useModal();

  useTimeOutEvent(imageContainerRef, "mouseenter", smallModalToggle, "mouseleave", MOUSE_OVER_DELAY);

  const handleClick = useCallback(
    (event) => {
      /* 클릭 이벤트가 모달 외부로 전파되어 다시 toggle 되는 현상을 막기 위함 */
      event.stopPropagation();
      bigModalToggle();
    },
    [bigModalToggle]
  );
  const handleResize = useCallback(
    () => setImageContainerSize(imageContainerRef.current.clientWidth),
    [setImageContainerSize]
  );
  useAddEventListener(imageContainerRef, "click", handleClick);
  useAddEventListener(windowRef, "resize", handleResize, setImageContainerSize, handleResize);

  useEffect(() => {
    if (isSmallModalOpen === false) return;
    setImageContainerRectInfo(imageContainerRef.current.getBoundingClientRect());
  }, [isSmallModalOpen]);

  return (
    <>
      <MainColumnItemContainer ref={imageContainerRef} separateCount={separateCount}>
        <MainColumnItemImg src={imgSrc ? TheMovieDBAPI.IMG_BASE_URL + imgSrc : "https://via.placeholder.com/200x100"} />
      </MainColumnItemContainer>

      {isSmallModalOpen && imageContainerRectInfo ? (
        <ModalPortal>
          <SmallModal
            imgSrc={imgSrc ? TheMovieDBAPI.IMG_BASE_URL + imgSrc : "https://via.placeholder.com/200x100"}
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
