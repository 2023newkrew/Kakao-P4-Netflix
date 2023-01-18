import React, { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

import "@scss/cardSlide/cardSlide.scss";
import { API } from "../../utils/axios";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useDebounce from "../../hooks/useDebounce";

const CardSlide = ({ title }) => {
  const [genreMovieList, setGenreMovieList] = useState([]);

  let cardSlideIndex = 0;
  const cardImageWidth = 340;

  const leftButtonElement = useRef(null);
  const rightButtonElement = useRef(null);

  const slideElement = useRef(null);

  useEffect(() => {
    fetchAndSetGenreMovieList();

    async function fetchAndSetGenreMovieList() {
      const fetchGenreMovieList = await API.fetchGenreMovie(title);
      setGenreMovieList(fetchGenreMovieList);
    }
  }, []);

  // 관측될 경우 & 관측안될 경우
  const [leftButtonObserve] = useIntersectionObserver(
    () => (leftButtonElement.current.style.display = "none"),
    () => (leftButtonElement.current.style.display = "block")
  );

  const [rightButtonObserve] = useIntersectionObserver(
    () => (rightButtonElement.current.style.display = "none"),
    () => (rightButtonElement.current.style.display = "block")
  );

  const onLeftButtonClick = () => {
    cardSlideIndex -= 1;
    slideElement.current.style.transform = `translateX(-${cardSlideIndex * cardImageWidth}px)`;
  };

  const onRightButtonClick = () => {
    cardSlideIndex += 1;
    slideElement.current.style.transform = `translateX(-${cardSlideIndex * cardImageWidth}px)`;
  };

  // ! Hooks 는 조건이 있는 함수 내에 들어가면 안됨 MovieCard 내에서 if 로 index를 조회해서 선언하려 했으나 안되었고 props로 넘기는게 더 깔끔할 것 같음
  const movieCardList = genreMovieList.map((movie, index) => {
    if (index === 0) return <MovieCard movie={movie} key={index} observe={leftButtonObserve} />;
    else if (index === genreMovieList.length - 1) return <MovieCard movie={movie} key={index} observe={rightButtonObserve} />;
    else return <MovieCard movie={movie} key={index} index={index} />;
  });

  return (
    <div className="cardSlide_container">
      <div className="cardSlide_wrapper">
        <button className="cardSlide_leftButton" ref={leftButtonElement} onClick={useDebounce(onLeftButtonClick, 400)}>
          <div>{"<"}</div>
        </button>
        <div className="cardSlide_slide" ref={slideElement}>
          {movieCardList}
        </div>
        <button className="cardSlide_rightButton" ref={rightButtonElement} onClick={useDebounce(onRightButtonClick, 400)}>
          <div>{">"}</div>
        </button>
      </div>
      <div className="cardSlide_title">{title}</div>
    </div>
  );
};

export default CardSlide;
