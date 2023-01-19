import React, { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

import "@scss/cardSlide/cardSlide.scss";
import { API } from "../../utils/axios";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CardSlide = ({ title }) => {
  const [genreMovieList, setGenreMovieList] = useState([]);

  const slideElement = useRef(null);

  useEffect(() => {
    fetchAndSetGenreMovieList();

    async function fetchAndSetGenreMovieList() {
      const fetchGenreMovieList = await API.fetchGenreMovie(title);

      setGenreMovieList(fetchGenreMovieList);
    }
  }, []);

  // ! Hooks 는 조건이 있는 함수 내에 들어가면 안됨 MovieCard 내에서 if 로 index를 조회해서 선언하려 했으나 안되었고 props로 넘기는게 더 깔끔할 것 같음

  const movieCardList = genreMovieList.map((movie, index) => (
    <SwiperSlide>
      <MovieCard movie={movie} key={index} />
    </SwiperSlide>
  ));

  if (movieCardList === undefined) <div>로딩 중 입니다 !</div>;
  return (
    <div className="cardSlide_container">
      <div className="cardSlide_wrapper">
        <div className="cardSlide_slide" ref={slideElement}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            speed={1000}
            slidesPerView={4}
            slidesPerGroup={4}
            touchRatio={0}
            pagination={{ clickable: true }}
            spaceBetween={60}
            navigation
            style={{ height: "100%", padding: "0 60px", color: "white" }}
          >
            {movieCardList}
          </Swiper>
        </div>
      </div>

      <div className="cardSlide_title">{title}</div>
    </div>
  );
};

export default CardSlide;
