import React, { useContext } from "react";
import { ContentCard } from "components";
import { ResponsiveContext } from "contexts";
import { SwiperSlide as Slide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  ContentListContainer,
  ContentSliderWrapper,
  ContentListTitle,
  Slider,
} from "./SliderContentList.style";

const ContentSlider = ({ contents }) => {
  const { cardsPerGroup } = useContext(ResponsiveContext);

  return (
    <ContentSliderWrapper>
      <Slider
        touchRatio={0}
        loop={true}
        navigation={true}
        slidesPerGroup={cardsPerGroup}
        slidesPerView={cardsPerGroup}
        modules={[Pagination, Navigation]}
        loopFillGroupWithBlank={false}
      >
        {contents?.map((content) => {
          return (
            <Slide key={content.id}>
              <ContentCard key={content.id} content={content} />
            </Slide>
          );
        })}
      </Slider>
    </ContentSliderWrapper>
  );
};

const SliderContentList = ({ contents, title }) => {
  return (
    <ContentListContainer>
      {title && <ContentListTitle>{title}</ContentListTitle>}
      {<ContentSlider contents={contents} />}
    </ContentListContainer>
  );
};

export default React.memo(SliderContentList);
