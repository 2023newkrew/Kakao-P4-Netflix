import React, { useEffect, useRef } from "react";
import TheMovieDBAPI from "../../../../../util/TheMovieDBAPI";
import { MainColumnItemCotainer, MainColumnItemImg } from "./styles";

export default function MainColumnItem(props) {
  const imageContainer = useRef(null);
  useEffect(() => {
    if (props.setImageContainerSize) {
      props.setImageContainerSize(imageContainer.current.clientWidth);
    }
  }, [imageContainer]);
  return (
    <MainColumnItemCotainer ref={imageContainer}>
      <MainColumnItemImg src={TheMovieDBAPI.imgBaseURL + props.imgSrc} />
    </MainColumnItemCotainer>
  );
}
