import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CardSlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;

  background-color: rgb(14, 14, 14);

  margin: 3vw 0;

  display: flex;
  flex-direction: column;
`;

export const CardSlideWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  padding-left: 10px;
`;

export const CardSlidePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  .swiper {
    width: 100%;
    height: 100%;
    padding: 0 60px;
    color: white;

    .swiper-pagination-bullet {
      background-color: white;
    }
  }
`;

export const CardSlideCategory = styled.div`
  position: relative;

  color: white;

  font-size: 40px;
  padding: 10px 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
