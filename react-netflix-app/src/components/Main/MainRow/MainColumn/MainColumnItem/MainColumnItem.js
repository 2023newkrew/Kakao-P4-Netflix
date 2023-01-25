import React, { useEffect, useRef, useState } from "react";
import TheMovieDBAPI from "../../../../../util/TheMovieDBAPI";
import useModal from "../../../../../util/useModal";
import SmallModal from "../../../../SmallModal/SmallModal";
import { MainColumnItemCotainer, MainColumnItemImg } from "./styles";
import ReactDom from "react-dom";
import ModalPortal from "../../../../../util/ModalPortal";
import BigModal from "../../../../BigModal/BigModal";

export default function MainColumnItem({
  imgSrc,
  setImageContainerSize,
  separateCount,
  vote_average,
  vote_count,
  release_date,
}) {
  const imageContainer = useRef(null);
  const timer = useRef(null);
  const [modalRectInfo, setModalRectInfo] = useState(null);
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
    setModalRectInfo(imageContainer.current.getBoundingClientRect());
  }, [isSmallModalOpen]);
  return (
    <>
      <MainColumnItemCotainer ref={imageContainer} separateCount={separateCount}>
        <MainColumnItemImg src={TheMovieDBAPI.imgBaseURL + imgSrc} />
      </MainColumnItemCotainer>
      {isSmallModalOpen && modalRectInfo ? (
        <ModalPortal>
          <SmallModal
            imgSrc={TheMovieDBAPI.imgBaseURL + imgSrc}
            offsetLeft={modalRectInfo.left}
            offsetTop={modalRectInfo.top}
            imageContainerWidth={modalRectInfo.width}
            imageContainerHeight={modalRectInfo.height}
            toggle={smallModalToggle}
            info={`vote_average : ${vote_average}
            vote_count : ${vote_count}
            release_date : ${release_date}`}
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
