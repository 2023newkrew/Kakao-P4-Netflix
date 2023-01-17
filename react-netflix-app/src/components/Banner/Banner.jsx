import React from "react";
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
  return (
    <BannerContainer>
      <BannerBackground>
        <img
          src="https://occ-0-3683-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABe2eYDVpLsH8o-ifLVi-gOMUei6k7QEegwniuQCARCAeG9umt5r80ZK1v9Rr5hqMZ_wpNlE3oZ14xJS_0ymhwaVlqbc9wUuye19e.webp?r=fb5"
          alt="컨텐츠 대표 이미지"
        ></img>
        <BackgroundFooter></BackgroundFooter>
      </BannerBackground>
      <BannerContent>
        <ContentTitle>컨텐츠 제목</ContentTitle>
        <ContentDesc>
          컨텐츠 소개, 줄거리 같은거!! 컨텐츠 소개, 줄거리 같은거!! 컨텐츠 소개, 줄거리 같은거!!
          컨텐츠 소개, 줄거리 같은거!!컨텐츠 소개, 줄거리 같은거!! 컨텐츠 소개, 줄거리 같은거!!
          컨텐츠 소개, 줄거리 같은거!!
        </ContentDesc>
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
