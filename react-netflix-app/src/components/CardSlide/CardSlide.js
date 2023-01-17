import React, { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

import "@scss/cardSlide/cardSlide.scss";
import { API } from "../../utils/axios";

const CardSlide = ({ title, genreId }) => {
  const [genreMovieList, setGenreMovieList] = useState([]);

  const ref = useRef(null);
  let currentSlideIndex = useRef(0).current;
  let slideWidth = useRef(2240).current;

  useEffect(() => {
    fetchAndSetGenreMovieList();

    async function fetchAndSetGenreMovieList() {
      const fetchGenreMovieList = await API.fetchGenreMovie(genreId);
      setGenreMovieList(fetchGenreMovieList);
    }
  }, []);

  return (
    <div className="cardSlide_container">
      <div className="cardSlide_title">{title}</div>
      {/* TODO : 밖으로 빼기 */}
      <div className="cardSlide_wrapper">
        <button
          className="cardSlide_leftButton"
          onClick={() => {
            currentSlideIndex -= 1;
            ref.current.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
          }}
        >
          A
        </button>
        <div className="cardSlide_slide" ref={ref}>
          {genreMovieList.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
        <button
          className="cardSlide_rightButton"
          onClick={() => {
            currentSlideIndex += 1;
            ref.current.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
          }}
        >
          B
        </button>
      </div>
    </div>
  );
};

export default CardSlide;
