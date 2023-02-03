import React, { useCallback, useEffect, useRef, useState } from "react";
import useModal from "../../../../util/hooks/useModal";
import SmallModal from "../../../Modal/SmallModal/SmallModal";
import { CarouselItemContainer, CarouselItemImg } from "./styles";
import BigModal from "../../../Modal/BigModal/BigModal";
import useTimeOutEvent from "../../../../util/hooks/useTimeOutEvent";
import useAddEventListener from "../../../../util/hooks/useAddEventListener";
import ModalPortal from "../../../Modal/ModalPortal/ModalPortal";
import TheMovieDBAPI from "../../../../util/class/TheMovieDBAPI";

const POPUP_MULTIPLE_VALUE = 1.3;
const POPUP_INFO_HEIGHT = 70;

const getPopUpTopOffset = (containerTop: number, containerHeight: number, scrollY: number) => {
  return containerTop + scrollY - (containerHeight * (POPUP_MULTIPLE_VALUE - 1)) / 2 - POPUP_INFO_HEIGHT / 2;
};
const getPopUpLeftOffset = (containerLeft: number, containerWidth: number, index: number, separateCount: number) => {
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

export default function CarouselItem({
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
}: {
  movieId: number;
  title: string;
  imgSrc: string;
  setImageContainerSize: React.Dispatch<React.SetStateAction<number | null>> | null;
  separateCount: number;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
  index: number;
  overViewInfo: string;
}) {
  const MOUSE_OVER_DELAY = 300;
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const windowRef = useRef(window);
  const [imageContainerRectInfo, setImageContainerRectInfo] = useState<DOMRect | null>(null);

  const { isModalOpen: isSmallModalOpen, toggle: smallModalToggle } = useModal();
  const { isModalOpen: isBigModalOpen, toggle: bigModalToggle } = useModal();

  useTimeOutEvent(imageContainerRef, "mouseenter", smallModalToggle, "mouseleave", MOUSE_OVER_DELAY);

  const handleClick = useCallback(
    (event: Event) => {
      /* 클릭 이벤트가 모달 외부로 전파되어 다시 toggle 되는 현상을 막기 위함 */
      event.stopPropagation();
      bigModalToggle();
    },
    [bigModalToggle]
  );
  const handleResize = useCallback(() => {
    if (setImageContainerSize && imageContainerRef.current)
      setImageContainerSize(imageContainerRef.current.clientWidth);
  }, [setImageContainerSize]);
  useAddEventListener(imageContainerRef, "click", handleClick);
  useAddEventListener(windowRef, "resize", handleResize, Boolean(setImageContainerSize), handleResize);

  useEffect(() => {
    if (!isSmallModalOpen) return;
    if (!imageContainerRef.current) return;
    setImageContainerRectInfo(imageContainerRef.current.getBoundingClientRect());
  }, [isSmallModalOpen]);

  return (
    <>
      <CarouselItemContainer ref={imageContainerRef} separateCount={separateCount}>
        <CarouselItemImg src={imgSrc ? TheMovieDBAPI.IMG_BASE_URL + imgSrc : "https://via.placeholder.com/200x100"} />
      </CarouselItemContainer>

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
