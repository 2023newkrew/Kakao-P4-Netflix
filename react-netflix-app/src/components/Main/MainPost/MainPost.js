import React, { useEffect, useState } from "react";
import TheMovieDBAPI from "../../../util/class/TheMovieDBAPI";
import {
  MainPostBottomShadow,
  MainPostContainer,
  MainPostImg,
  MainPostInfo,
  MainPostLeftShadow,
  MainPostMetaContainer,
  MainPostTitle,
} from "./styles";

export default function MainPost() {
  const [postInfo, setPostInfo] = useState("");

  useEffect(() => {
    const fetchMainPost = async () => {
      const popularMovieList = await TheMovieDBAPI.getPopularMovieList();
      const randomIndex = Math.floor(Math.random() * popularMovieList.length);
      setPostInfo(popularMovieList[randomIndex]);
    };
    fetchMainPost();
  }, []);

  return postInfo !== "" ? (
    <>
      <MainPostContainer>
        <MainPostImg src={TheMovieDBAPI.IMG_BASE_URL + postInfo.backdrop_path} />
        <MainPostMetaContainer>
          <MainPostTitle>{postInfo.title}</MainPostTitle>
          <MainPostInfo>{postInfo.overview}</MainPostInfo>
        </MainPostMetaContainer>
        <MainPostLeftShadow />
        <MainPostBottomShadow />
      </MainPostContainer>
    </>
  ) : null;
}
