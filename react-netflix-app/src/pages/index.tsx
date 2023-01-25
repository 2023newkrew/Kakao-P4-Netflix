import { getUpcomingMovies, getPopularMovies } from '@apis/movies';
import MovieList from '@components/movie/MovieList';
import { MoviePoster } from '@components/movie/MoviePoster';
import useCarousel from '@hooks/useCarousel';
import { MovieType } from '@models/movies.model';
import { useEffect, useState } from 'react';


export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [randomMovie, setRandomMovie] = useState<MovieType | undefined>();
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<MovieType[]>([]);
  const popularCarousel = useCarousel({ totalElements: 20, totalVisibleElements: 5});
  const upcomingCarousel = useCarousel({ totalElements: 20, totalVisibleElements: 5});
  useEffect(() => {
    const fetchPopularMovies = async() => {
      const { data: { results }} = await getPopularMovies();
      setPopularMovies(results);
      
      const randomNumber = Math.floor(Math.random() * results.length);
      setRandomMovie(results[randomNumber]);
    };
    const fetchUpcomingMovies = async() => {
      const { data: { results }} = await getUpcomingMovies();
      setUpcomingMovies(results);
    };

    Promise.all([
      fetchPopularMovies(),
      fetchUpcomingMovies()
    ]).then(() => {
      setIsLoading(false);
    });
    
  }, []);
  
  if (isLoading || !randomMovie) return <></>;
  return (
    <>
      <MoviePoster movie={randomMovie}/>
      <MovieList {...popularCarousel} title={'TOP 20 인기 영화'} movies={popularMovies}/>
      <MovieList {...upcomingCarousel} title={'개봉 예정 20선'} movies={upcomingMovies}/>
    </>
  );
}