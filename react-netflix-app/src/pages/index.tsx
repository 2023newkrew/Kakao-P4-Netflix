import MovieList from '@components/movie/MovieList';
import MoviePoster from '@components/movie/MoviePoster';
import { TOTAL_SHOWN } from '@constants/movies.constant';
import useCarousel from '@hooks/useCarousel';
import { MovieType } from '@models/movies.model';
import { useFetchMovies } from '@/hooks/useFetchMovies';
import { useRandomValue } from '@/hooks/useRandomValue';


export default function Main() {
  const [popularMovies, isPopularError, isPopularLoading] = useFetchMovies('popular');
  const [upcomingMovies, isUpcomingError, isUpcomingLoading] = useFetchMovies('upcoming');
  const randomMovie = useRandomValue<MovieType>(popularMovies);
  
  const popularCarousel = useCarousel({ totalElements: popularMovies.length, totalVisibleElements: TOTAL_SHOWN});
  const upcomingCarousel = useCarousel({ totalElements: upcomingMovies.length, totalVisibleElements: TOTAL_SHOWN });
  
  if (isPopularError || isUpcomingError) {
    return <>error</>;
  }
  if (isPopularLoading || isUpcomingLoading || !randomMovie){
    return <>loading...</>;
  }
  return (
    <>
      <MoviePoster movie={randomMovie}/>
      <MovieList 
        {...popularCarousel}
        title={'TOP 20 인기 영화'}
        movies={popularMovies}
      />
      <MovieList
        {...upcomingCarousel}
        title={'개봉 예정 20선'}
        movies={upcomingMovies}
      />
    </>
  );
}
