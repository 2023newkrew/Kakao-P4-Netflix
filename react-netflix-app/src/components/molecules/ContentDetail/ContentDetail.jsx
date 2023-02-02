import React, { useEffect, useState } from "react";
import { EllipsisText } from "components";
import api from "utils/API";
import {
  ContentDetailContainer,
  ContentDetailBackground,
  BackgroundFooter,
  ContentDetailContent,
  ContentTitle,
  ContentDesc,
} from "./ContentDetail.style";

const ContentDetail = ({ title, desc, imageURL }) => {
  return (
    <ContentDetailContainer>
      <ContentDetailBackground>
        <img src={api.getImageSeverURL() + imageURL} alt={`<${title}>의 대표 이미지`}></img>
        <BackgroundFooter></BackgroundFooter>
      </ContentDetailBackground>
      <ContentDetailContent>
        <ContentTitle>
          <EllipsisText text={title} fontSize={"3.4vw"} fontWeight={"bold"} line={1}></EllipsisText>
        </ContentTitle>
        <ContentDesc>
          <EllipsisText text={desc} fontSize={"1vw"} line={8}></EllipsisText>
        </ContentDesc>
      </ContentDetailContent>
    </ContentDetailContainer>
  );
};

export default ContentDetail;
