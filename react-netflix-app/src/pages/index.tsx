import { getPopularMovies } from '@apis/movies';
import { Image } from '@components/common/Image';
import { Text } from '@components/common/Text';
import MovieList from '@components/movie/MovieList';
import { MoviePoster } from '@components/movie/MoviePoster';
import { COLORS } from '@constants/colors.contant';
import useCarousel from '@hooks/useCarousel';
import { MovieType } from '@models/movies.model';
import { throttle } from '@utils/throttle';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  useEffect(() => {
    
    const handleScroll = throttle(() => {
      console.log('scrolled');
    }, 500);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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