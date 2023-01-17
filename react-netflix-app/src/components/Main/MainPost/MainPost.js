import React, { useEffect, useState } from "react";
import TheMovieDBAPI from "../../../util/TheMovieDBAPI";
import { MainPostBottomShadow, MainPostContainer, MainPostImg, MainPostLeftShadow } from "./styles";

export default function MainPost() {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const fetchMainPost = async () => {
      const popularMovieList = await TheMovieDBAPI.getPopularMovieList();
      const randomIndex = Math.floor(Math.random() * popularMovieList.length);
      setImgSrc(popularMovieList[randomIndex].backdrop_path);
    };
    fetchMainPost();
  }, []);

  return imgSrc !== "" ? (
    <>
      <MainPostContainer>
        <MainPostImg src={TheMovieDBAPI.imgBaseURL + imgSrc} />
        <MainPostLeftShadow />
        <MainPostBottomShadow />
      </MainPostContainer>
    </>
  ) : null;
}
