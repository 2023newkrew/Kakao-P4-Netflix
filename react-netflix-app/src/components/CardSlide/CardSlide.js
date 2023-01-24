import { CardSlideContainer, CardSlideCategory, CardSlideWrapper, CardSlidePage } from "@styles/cardSlide/CardSlide.style";

import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import { API } from "@/utils/axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const CardSlide = ({ category }) => {
  const [genreMovieList, setGenreMovieList] = useState();

  useEffect(() => {
    fetchAndSetGenreMovieList();

    async function fetchAndSetGenreMovieList() {
      const fetchGenreMovieList = await API.fetchGenreMovie(category);
      setGenreMovieList(fetchGenreMovieList);
    }
  }, []);

  if (genreMovieList === undefined) return <div />;

  const movieCardList = genreMovieList.map((movie) => (
    <SwiperSlide key={movie.id}>
      <MovieCard movie={movie} />
    </SwiperSlide>
  ));

  return (
    <CardSlideContainer>
      <CardSlideWrapper>
        <CardSlidePage>
          <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} loop={true} speed={2000} slidesPerView={5} slidesPerGroup={5} touchRatio={0} pagination={{ clickable: true }} spaceBetween={10} navigation>
            {movieCardList}
          </Swiper>
        </CardSlidePage>
      </CardSlideWrapper>

      <CardSlideCategory>{category}</CardSlideCategory>
    </CardSlideContainer>
  );
};

export default CardSlide;
