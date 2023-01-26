import { CardSlideContainer, CardSlideCategory, CardSlideWrapper, CardSlidePage } from "@styles/cardSlide/CardSlide.style";

import MovieCard from "./MovieCard";

import { API } from "@utils/axios";
import useFetch from "@hooks/useFetch";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const CardSlide = ({ category }) => {
  const { data, loading, LoadingComponent } = useFetch(API.fetchGenreMovie(category));

  if (loading) return <LoadingComponent />;

  const genreMovieList = data;

  const movieCardList = genreMovieList.map((movie) => (
    <SwiperSlide key={movie.id}>
      <MovieCard movie={movie} />
    </SwiperSlide>
  ));

  return (
    <CardSlideContainer>
      <CardSlideWrapper>
        <CardSlidePage>
          <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} loopFillGroupWithBlank={false} loop={true} speed={2000} slidesPerView={5} slidesPerGroup={5} touchRatio={0} pagination={{ clickable: true }} spaceBetween={10} navigation>
            {movieCardList}
          </Swiper>
        </CardSlidePage>
      </CardSlideWrapper>

      <CardSlideCategory>{category}</CardSlideCategory>
    </CardSlideContainer>
  );
};

export default CardSlide;
