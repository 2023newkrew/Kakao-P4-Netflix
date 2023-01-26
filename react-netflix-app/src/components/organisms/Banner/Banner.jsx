import React, { useEffect, useState } from "react";
import { IconButton, EllipsisText } from "components";
import api from "utils/API";
import { getRandomNumber } from "utils/common";

import {
  BannerContainer,
  BannerBackground,
  BackgroundFooter,
  BannerContent,
  ContentTitle,
  ContentDesc,
  ContentButtonBox,
} from "./Banner.style";
import playImage from "assets/play.svg";
import infoImage from "assets/info.svg";

const Banner = () => {
  const [content, setContent] = useState({
    backdrop_path: "",
    title: "",
    overview: "",
  });

  useEffect(() => {
    getPopularContent();
  }, []);

  const getPopularContent = async () => {
    const res = await api.get(`/movie/popular`, { language: "ko-KR" });
    const randomNumber = getRandomNumber(0, res.results.length);
    setContent(res.results[randomNumber]);
  };

  return (
    <BannerContainer>
      <BannerBackground>
        <img src={api.getImageSeverURL() + content.backdrop_path} alt="컨텐츠 대표 이미지"></img>
        <BackgroundFooter></BackgroundFooter>
      </BannerBackground>
      <BannerContent>
        <ContentTitle>
          <EllipsisText text={content.title} fontSize={"5.2vw"} fontWeight={"bold"}></EllipsisText>
        </ContentTitle>
        <ContentDesc>
          <EllipsisText text={content.overview} fontSize={"1.2vw"} line={4}></EllipsisText>
        </ContentDesc>
        <ContentButtonBox>
          <IconButton iconImage={playImage} text={"재생"} theme="white" />
          <IconButton iconImage={infoImage} text={"상세 정보"} />
        </ContentButtonBox>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
