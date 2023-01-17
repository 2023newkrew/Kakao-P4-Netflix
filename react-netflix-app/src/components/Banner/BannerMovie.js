import "@scss/banner/bannerMovie.scss";

const BannerMovie = ({ bannerMovie }) => {
  const bannerMovieImageURL = process.env.REACT_APP_IMAGE_API_URL + `/${bannerMovie.backdrop_path || bannerMovie.poster_path}`;

  return (
    <div className="bannerMovie_container">
      <img className="bannerMovie_image" src={bannerMovieImageURL} alt="배너 영화 이미지" />
    </div>
  );
};

export default BannerMovie;
