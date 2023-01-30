import { BannerMovieContainer } from "@styles/banner/BannerMovie.style";

const BannerMovie = ({ bannerMovie }) => {
  const movieImageURL = process.env.REACT_APP_ORIGINAL_IMAGE_API_URL + `/${bannerMovie.backdrop_path || bannerMovie.poster_path}`;

  return (
    <BannerMovieContainer>
      <img src={movieImageURL} alt={bannerMovie.title} />
    </BannerMovieContainer>
  );
};

export default BannerMovie;
