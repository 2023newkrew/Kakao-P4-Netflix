import React, { useEffect, useState } from "react";
import { ContentCard } from "components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  ContentListContainer,
  ContentListWrapper,
  ContentListTitle,
  ContentListSlider,
} from "./ContentCardList.style";

import api from "utils/API";

const ContentCardList = ({ id, genrename }) => {
  const [contents, setContents] = useState([
    {
      id: "",
      backdrop_path: "",
      title: "",
      overview: "",
    },
  ]);

  useEffect(() => {
    getContentsByGenre();
  }, []);

  const getContentsByGenre = async () => {
    const res = await api.get(`/discover/movie`, { with_genres: id, language: "ko-KR" });
    setContents(res.results);
  };

  const ContentCards = React.memo(() => {
    return (
      <ContentListSlider
        slidesPerView={6}
        spaceBetween={3}
        slidesPerGroup={6}
        loop={true}
        touchRatio={0}
        loopFillGroupWithBlank={false}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <ContentListWrapper>
          {contents?.map((content) => {
            return (
              <SwiperSlide>
                <ContentCard key={content.id} content={content} />
              </SwiperSlide>
            );
          })}
        </ContentListWrapper>
      </ContentListSlider>
    );
  });

  return (
    <ContentListContainer>
      <ContentListTitle>{genrename}</ContentListTitle>
      <ContentCards />
    </ContentListContainer>
  );
};

export default ContentCardList;
