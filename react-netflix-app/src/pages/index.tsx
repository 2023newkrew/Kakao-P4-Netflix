import { getUpcomingMovies, getPopularMovies } from '@apis/movies';
import MovieList from '@components/movie/MovieList';
import { MoviePoster } from '@components/movie/MoviePoster';
import { TOTAL_SHOWN } from '@constants/movies.constant';
import useCarousel from '@hooks/useCarousel';
import { MovieType } from '@models/movies.model';
import { useEffect, useState } from 'react';
import { GlobalPortal } from '@/GlobalPortal';
import styled from 'styled-components';
import { MovieModal } from '@/components/movie/MoiveModal';


export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<MovieType[]>([]);
  const [randomMovie, setRandomMovie] = useState<MovieType | undefined>();
  const popularCarousel = useCarousel({ totalElements: popularMovies.length, totalVisibleElements: TOTAL_SHOWN});
  const upcomingCarousel = useCarousel({ totalElements: upcomingMovies.length, totalVisibleElements: TOTAL_SHOWN });
  const [selectedMovie, setSelectedMovie] = useState<MovieType | undefined>();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const { data: { results }} = await getPopularMovies();
      setPopularMovies(results);
      
      return results;
    };
    const fetchUpcomingMovies = async () => {
      const { data: { results }} = await getUpcomingMovies();
      setUpcomingMovies(results);

      return results;
    };
    const getRandomMovie = (movies: MovieType[]) => {
      const randomNumber = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomNumber]);
    };

    Promise.all([
      fetchPopularMovies(),
      fetchUpcomingMovies()
    ]).then((movies: MovieType[][]) => {
      const [popularMovies, upcomingMovies] = movies;
      const allMovies = [...popularMovies, ...upcomingMovies];
      getRandomMovie(allMovies);
      setIsLoading(false);
    });
    
  }, []);
  
  if (isLoading || !randomMovie) return <></>;
  return (
    <>
      <MoviePoster movie={randomMovie}/>
      <MovieList 
        {...popularCarousel}
        title={'TOP 20 인기 영화'}
        movies={popularMovies}
        handleSelectMovie={setSelectedMovie}
      />
      <MovieList
        {...upcomingCarousel}
        title={'개봉 예정 20선'}
        movies={upcomingMovies}
        handleSelectMovie={setSelectedMovie}
      />
      { selectedMovie && <MovieModal movie={selectedMovie}/> }
    </>
  );
}

const Test = styled.div`
  background: #000;
  height: 100vh;
  width: 100vw;
`;