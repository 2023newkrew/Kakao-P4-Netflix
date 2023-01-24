import PropTypes from 'prop-types';
import { Banner } from '@pages/Main/MainPage.style';
import playIcon from '@icons/play.svg';
import { THUMBNAIL_BASE_URL } from '@constants/tmdb';
import { useEffect, useState } from 'react';

const MovieBanner = ({ movie }) => {
  const [titleStyle, setTitleStyle] = useState();
  useEffect(() => {
    setTitleStyle({ transform: 'scale(0.6)' });
  }, []);

  return (
    <Banner.Container>
      <Banner.BackgroundLayer>
        {movie?.poster_path && <img src={THUMBNAIL_BASE_URL + movie?.backdrop_path} alt="배너 이미지" />}
        <Banner.Content>
          <Banner.MovieInfo>
            <h3 style={titleStyle}>{movie.title}</h3>
            <p>{movie.overview.split('.')[0]}</p>
            <div>
              <Banner.Button className="primary">
                <img src={playIcon} alt="재생 아이콘" />
                재생
              </Banner.Button>
              <Banner.Button className="secondary">상세 정보</Banner.Button>
            </div>
          </Banner.MovieInfo>
          <Banner.Utils>
            <button>음소거 버튼</button>
            <span>15세+</span>
          </Banner.Utils>
        </Banner.Content>
      </Banner.BackgroundLayer>
    </Banner.Container>
  );
};
MovieBanner.propTypes = {
  movie: PropTypes.object,
};
export default MovieBanner;
