import { MovieCardSubInfoContainer } from "@styles/modal/MovieModal.style";

const MovieCardSubInfo = ({ movieInfo }) => {
  return (
    <MovieCardSubInfoContainer>
      <div>평점 : {Math.round(movieInfo.vote_average, 1)}점</div>
      <div>장르 : [ {movieInfo.genres && movieInfo.genres.map((genre) => genre.name + " ")}]</div>
      <div>개봉일 : {movieInfo.release_date}</div>
      <div>러닝타임 : {movieInfo.runtime}분</div>
    </MovieCardSubInfoContainer>
  );
};

export default MovieCardSubInfo;
