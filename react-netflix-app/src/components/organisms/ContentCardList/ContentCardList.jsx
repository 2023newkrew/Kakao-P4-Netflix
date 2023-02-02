import React, { useContext } from "react";
import { ContentCard } from "components";
import { ResponsiveContext } from "contexts";
import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  ContentListContainer,
  ContentGroupListWrapper,
  ContentGroupWrapper,
  ContentListTitle,
  ContentGroupListSlider,
} from "./ContentCardList.style";

const ContentCardGroup = ({ contents }) => {
  const { cardsPerGroup } = useContext(ResponsiveContext);
  return (
    <ContentGroupWrapper cardsPerGroup={cardsPerGroup}>
      {contents.map((content) => (
        <ContentCard key={content.id} content={content} />
      ))}
    </ContentGroupWrapper>
  );
};

const ContentCardGroups = ({ contents, cardsPerGroup, type }) => {
  const cardGroupList = [];
  for (let i = 0; i < contents.length; i += cardsPerGroup) {
    // key값 괜찮나..?
    cardGroupList.push(
      <SwiperSlide key={i}>
        <ContentCardGroup key={i} contents={contents.slice(i, i + cardsPerGroup)} />
      </SwiperSlide>
    );
  }
  return (
    <ContentGroupListWrapper>
      {type === "slide" ? (
        <ContentGroupListSlider
          touchRatio={0}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          children={cardGroupList}
        />
      ) : (
        cardGroupList
      )}
    </ContentGroupListWrapper>
  );
};

const ContentCardList = ({ contents, title, type = "slide" }) => {
  const { cardsPerGroup } = useContext(ResponsiveContext);
  return (
    <ContentListContainer>
      {title && <ContentListTitle>{title}</ContentListTitle>}
      {<ContentCardGroups cardsPerGroup={cardsPerGroup} contents={contents} type={type} />}
    </ContentListContainer>
  );
};

export default React.memo(ContentCardList);
