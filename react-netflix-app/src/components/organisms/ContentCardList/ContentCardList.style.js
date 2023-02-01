import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import arrowLeft from "assets/arrow-left.svg";
import arrowRight from "assets/arrow-right.svg";

export const ContentListContainer = styled.li`
  padding: 20px 0;
  z-index: 5;
`;

export const ContentGroupListWrapper = styled.ul`
  padding: 10px 0px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentGroupWrapper = styled.div`
  display: grid;
  row-gap: 2vw;
  grid-template-columns: repeat(6, 1fr);
  /* padding: 2vw; */
`;

export const ContentListTitle = styled.h3`
  padding: 10px 30px;
  font-size: 20px;
  font-weight: bold;
`;

export const ContentGroupListSlider = styled(Swiper)`
  padding: 0 30px;

  .swiper-button-prev {
    background: url(${arrowLeft}) no-repeat;
    background-size: contain;
    background-position: center;
  }
  .swiper-button-next {
    background: url(${arrowRight}) no-repeat;
    background-size: contain;
    background-position: center;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
  }
`;
