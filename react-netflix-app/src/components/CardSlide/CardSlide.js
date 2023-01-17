import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import "@scss/cardSlide/cardSlide.scss";
import { API } from "../../utils/axios";

const CardSlide = ({ title, genreId }) => {
  const [genreMovieList, setGenreMovieList] = useState([]);

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
      <div className="cardSlide_wrapper">
        {genreMovieList.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardSlide;
