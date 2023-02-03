import { MovieCardInfoContainer, MovieCardInfoTitle, MovieCardInfoVoteAverage, MovieCardInfoCategory } from "@styles/cardSlide/MovieCardInfo.style";

import genre from "@json/genre.json";

const MovieCardInfo = ({ movie, open }) => {
  const movieCategoryIdList = movie.genre_ids;
  const movieCategory = movieCategoryIdList.map((value) => <li key={value}>{genre[value]}</li>);

  return (
    <MovieCardInfoContainer>
      <MovieCardInfoTitle>{movie.title}</MovieCardInfoTitle>
      <MovieCardInfoVoteAverage>{movie.vote_average}</MovieCardInfoVoteAverage>
      <MovieCardInfoCategory>{movieCategory}</MovieCardInfoCategory>
    </MovieCardInfoContainer>
  );
};

export default MovieCardInfo;
