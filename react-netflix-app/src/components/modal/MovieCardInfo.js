import { MovieCardInfoContainer, MovieCardTitle, MovieCardSubTitle, MovieCardOverviewWrapper, MovieCardOverview } from "@styles/modal/MovieModal.style";

const MovieCardInfo = ({ movieInfo }) => {
  return (
    <MovieCardInfoContainer>
      <MovieCardTitle>{movieInfo.title}</MovieCardTitle>
      <MovieCardSubTitle>{movieInfo.tagline}</MovieCardSubTitle>
      <MovieCardOverviewWrapper>
        <MovieCardOverview>{movieInfo.overview}</MovieCardOverview>
      </MovieCardOverviewWrapper>
    </MovieCardInfoContainer>
  );
};

export default MovieCardInfo;
