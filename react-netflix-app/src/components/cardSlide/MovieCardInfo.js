import { MovieCardInfoContainer, MovieCardInfoButton, MovieCardInfoDetailButton, MovieCardInfoTitle, MovieCardInfoVoteAverage, MovieCardInfoCategory } from "@styles/cardSlide/MovieCardInfo.style";

import { ImPlay2 } from "react-icons/im";
import { BsPlusCircle } from "react-icons/bs";
import { GoThumbsup } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import genre from "@json/genre.json";

const MovieCardInfo = ({ movie, open }) => {
  const movieCategoryIdList = movie.genre_ids;
  const movieCategory = movieCategoryIdList.map((value) => <li key={value}>{genre[value]}</li>);

  const svgSize = 30;

  return (
    <MovieCardInfoContainer>
      <MovieCardInfoButton>
        <ImPlay2 size={svgSize} />
        <BsPlusCircle size={svgSize} />
        <GoThumbsup size={svgSize} />

        <MovieCardInfoDetailButton>
          <IoIosArrowDropdownCircle size={svgSize} onClick={open} />
        </MovieCardInfoDetailButton>
      </MovieCardInfoButton>

      <MovieCardInfoTitle>{movie.title}</MovieCardInfoTitle>

      <MovieCardInfoVoteAverage>{movie.vote_average}</MovieCardInfoVoteAverage>

      <MovieCardInfoCategory>{movieCategory}</MovieCardInfoCategory>
    </MovieCardInfoContainer>
  );
};

export default MovieCardInfo;
