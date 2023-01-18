import { getPopularMovies } from '@apis/movies';
import { Image } from '@components/common/Image';
import MovieList from '@components/movie/MovieList';
import { MoviePoster } from '@components/movie/MoviePoster';
import { COLORS } from '@constants/colors.contant';
import { MovieType } from '@models/movies.model';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [randomMovie, setRandomMovie] = useState<MovieType | undefined>();
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  
  useEffect(() => {
    const fetchPopularMovies = async() => {
      const { data, status } = await getPopularMovies();
      const { page, results, total_pages, total_results } = data;
      const randomNumber = Math.floor(Math.random() * results.length);

      setPopularMovies(results);
      setRandomMovie(results[randomNumber]);
      setLoading(true);
    };
    fetchPopularMovies();
  }, []);

  if (!loading || !randomMovie) return <></>;
  return (
    <>
      <MoviePoster movie={randomMovie}/>
      <MovieList movies={popularMovies}/>
    </>
  );
}