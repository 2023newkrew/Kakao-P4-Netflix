import React, { useEffect, useState } from "react";
import { ContentCard } from "components";
import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import api from "utils/API";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  ContentListContainer,
  ContentListWrapper,
  ContentListTitle,
  ContentListSlider,
} from "./ContentCardList.style";

const ContentCards = ({ contents }) => {
  return (
    <ContentListWrapper>
      {contents?.length && (
        <ContentListSlider
          slidesPerView={6}
          spaceBetween={3}
          slidesPerGroup={6}
          touchRatio={0}
          loop={true}
          loopFillGroupWithBlank={false}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {contents?.map((content) => {
            return (
              <SwiperSlide key={content.id}>
                <ContentCard key={content.id} content={content} />
              </SwiperSlide>
            );
          })}
        </ContentListSlider>
      )}
    </ContentListWrapper>
  );
};

const ContentCardList = ({ id, genreName }) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getContentsByGenre();
  }, []);

  const getContentsByGenre = async () => {
    const res = await api.get(`/discover/movie`, { with_genres: id, language: "ko-KR" });
    setContents(res.results);
  };

  return (
    <ContentListContainer>
      <ContentListTitle>{genreName}</ContentListTitle>
      <ContentCards contents={contents} />
    </ContentListContainer>
  );
};

export default React.memo(ContentCardList);
