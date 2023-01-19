import { getPopularMovies } from '@apis/movies';
import { Text } from '@components/common/Text';
import MovieList from '@components/movie/MovieList';
import { MoviePoster } from '@components/movie/MoviePoster';
import useCarousel from '@hooks/useCarousel';
import { MovieType } from '@models/movies.model';
import { useEffect, useState } from 'react';


export default function Main() {
  const [loading, setLoading] = useState(false);
  const [randomMovie, setRandomMovie] = useState<MovieType | undefined>();
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  const { currentPage, handlePrevPage, handleNextPage } = useCarousel({ totalElements: 20, totalVisibleElements: 1});
  useEffect(() => {
    const fetchPopularMovies = async() => {
      const { data: { results }} = await getPopularMovies();
      setPopularMovies(results);
      
      const randomNumber = Math.floor(Math.random() * results.length);
      setRandomMovie(results[randomNumber]);

      setLoading(true);
    };
    fetchPopularMovies();
  }, []);
  
  if (!loading || !randomMovie) return <></>;
  return (
    <>
      <MoviePoster movie={randomMovie}/>
      <MovieList title={'TOP 20 인기 영화'} movies={popularMovies}/>
      <button onClick={handlePrevPage}>-</button>
      <Text>{currentPage}</Text>
      <button onClick={handleNextPage}>+</button>
    </>
  );
}