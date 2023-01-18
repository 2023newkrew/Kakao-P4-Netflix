import React, { useEffect, useState } from "react";
import api from "utils/API";
import {
  BannerContainer,
  BannerBackground,
  BackgroundFooter,
  BannerContent,
  ContentTitle,
  ContentDesc,
  ContentButtonBox,
  ContentButton,
} from "./Banner.style";

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
    // 랜덤 선택으로 변경하기 0~19
    setContent(res.results[0]);
  };

  return (
    <BannerContainer>
      <BannerBackground>
        <img src={api.getimageSeverURL() + content.backdrop_path} alt="컨텐츠 대표 이미지"></img>
        <BackgroundFooter></BackgroundFooter>
      </BannerBackground>
      <BannerContent>
        <ContentTitle as="h1">{content.title}</ContentTitle>
        <ContentDesc>{content.overview}</ContentDesc>
        <ContentButtonBox>
          <ContentButton color="#000" backgroundColor="#fff">
            재생
          </ContentButton>
          <ContentButton>상세 정보</ContentButton>
        </ContentButtonBox>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
