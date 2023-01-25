import React, { useEffect, useRef, useState } from "react";
import TheMovieDBAPI from "../../../../../util/TheMovieDBAPI";
import useModal from "../../../../../util/useModal";
import SmallModal from "../../../../SmallModal/SmallModal";
import { MainColumnItemCotainer, MainColumnItemImg } from "./styles";
import ReactDom from "react-dom";
import ModalPortal from "../../../../../util/ModalPortal";

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
  const [isModalOpen, toggle] = useModal();

  useEffect(() => {
    let handleResize;

    if (setImageContainerSize) {
      setImageContainerSize(imageContainer.current.clientWidth);

      /* 이벤트 등록 */
      handleResize = (event) => {
        setImageContainerSize(imageContainer.current.clientWidth);
      };
      window.addEventListener("resize", handleResize);
    }

    const handleMouseEnter = (event) => {
      timer.current = setTimeout(toggle, 1000);
    };
    const handleMouseLeave = (event) => {
      clearTimeout(timer.current);
    };

    imageContainer.current.addEventListener("mouseenter", handleMouseEnter);
    imageContainer.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      imageContainer.current.removeEventListener("mouseenter", handleMouseEnter);
      imageContainer.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen === false) return;
    setModalRectInfo(imageContainer.current.getBoundingClientRect());
  }, [isModalOpen]);
  return (
    <>
      <MainColumnItemCotainer ref={imageContainer} separateCount={separateCount}>
        <MainColumnItemImg src={TheMovieDBAPI.imgBaseURL + imgSrc} />
      </MainColumnItemCotainer>
      {isModalOpen && modalRectInfo ? (
        <ModalPortal>
          <SmallModal
            imgSrc={TheMovieDBAPI.imgBaseURL + imgSrc}
            offsetLeft={modalRectInfo.left}
            offsetTop={modalRectInfo.top}
            imageContainerWidth={modalRectInfo.width}
            imageContainerHeight={modalRectInfo.height}
            toggle={toggle}
            info={`vote_average : ${vote_average}
            vote_count : ${vote_count}
            release_date : ${release_date}`}
          />
        </ModalPortal>
      ) : null}
    </>
  );
}
