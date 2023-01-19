import React, { useEffect, useRef } from "react";
import TheMovieDBAPI from "../../../../../util/TheMovieDBAPI";
import { MainColumnItemCotainer, MainColumnItemImg } from "./styles";

export default function MainColumnItem({ imgSrc, setImageContainerSize, separateCount }) {
  const imageContainer = useRef(null);
  useEffect(() => {
    if (setImageContainerSize) {
      setImageContainerSize(imageContainer.current.clientWidth);

      /* 이벤트 등록 */
      const handleResize = (event) => {
        console.log("here");
        console.log(imageContainer.current.clientWidth);
        setImageContainerSize(imageContainer.current.clientWidth);
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <MainColumnItemCotainer ref={imageContainer} separateCount={separateCount}>
      <MainColumnItemImg src={TheMovieDBAPI.imgBaseURL + imgSrc} />
    </MainColumnItemCotainer>
  );
}
