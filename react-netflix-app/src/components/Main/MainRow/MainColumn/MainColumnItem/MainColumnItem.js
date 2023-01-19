import React, { useEffect, useRef } from "react";
import TheMovieDBAPI from "../../../../../util/TheMovieDBAPI";
import { MainColumnItemCotainer, MainColumnItemImg } from "./styles";

export default function MainColumnItem({ imgSrc, setImageContainerSize, separateCount }) {
  const imageContainer = useRef(null);
  useEffect(() => {
    if (setImageContainerSize) {
      setImageContainerSize(imageContainer.current.clientWidth);
    }
  }, []);
  return (
    <MainColumnItemCotainer ref={imageContainer} separateCount={separateCount}>
      <MainColumnItemImg src={TheMovieDBAPI.imgBaseURL + imgSrc} />
    </MainColumnItemCotainer>
  );
}
