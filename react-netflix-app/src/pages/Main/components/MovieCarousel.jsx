import { Pagination, Controller, Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import { CarouselContainer, MovieSwiper } from '@pages/Main/components/MovieCarousel.style';
import MovieCard from '@pages/Main/components/MovieCard';
import { breakpoints } from '@styles/theme';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
  pagination: {
    clickable: true,
  },
  navigation: true,
  slidesPerGroup: 2,
  slidesPerView: 2,
  breakpoints: {
    [breakpoints.sm]: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    [breakpoints.md]: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    [breakpoints.lg]: {
      slidesPerGroup: 5,
      slidesPerView: 5,
    },
    [breakpoints.xl]: {
      slidesPerGroup: 6,
      slidesPerView: 6,
    },
  },
  modules: [Pagination, Controller, Navigation],
};

const MovieCarousel = ({ movies }) => {
  return (
    <CarouselContainer>
      <MovieSwiper {...swiperOptions}>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </MovieSwiper>
    </CarouselContainer>
  );
};
MovieCarousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
export default MovieCarousel;
