import MovieList from '@components/home/movie-list';
import Footer from '@components/common/footer';
import Header from '@components/common/header';
import Hero from '@components/home/hero';
import { useEffect, useState } from 'react';
import {
  getNowPlayingMovieList,
  getPopularMovieList,
  getTopratedMovieList,
  getUpcomingMovieList,
} from '@/apis/movie';
import { rand } from '@/utils/math';
import { MOVIE_LIST, MOVIE_LIST_TITLE } from '@/constants/movie';
import { MovieListSection } from './styles';

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [toprated, setToprated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const [heroMovie, setHeroMovie] = useState({});

  const movieLists = Object.entries({
    [MOVIE_LIST.NOW_PLAYING]: nowPlaying,
    [MOVIE_LIST.POPULAR]: popular,
    [MOVIE_LIST.TOP_RATED]: toprated,
    [MOVIE_LIST.UPCOMING]: upcoming,
  });

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const [nowPlayingData, popularData, topratedData, upcomingData] = await Promise.all([
        getNowPlayingMovieList(),
        getPopularMovieList(),
        getTopratedMovieList(),
        getUpcomingMovieList(),
      ]);

      setNowPlaying(nowPlayingData);
      setPopular(popularData);
      setToprated(topratedData);
      setUpcoming(upcomingData);
      setHeroMovie(nowPlayingData[rand({ max: nowPlayingData.length - 1 }) || 0]);
    };
    fetchNowPlaying();
  }, []);

  return (
    <>
      <Header />
      <Hero movie={heroMovie} />
      <MovieListSection>
        {movieLists.map(([title, movies]) => (
          <MovieList key={title} title={MOVIE_LIST_TITLE[title]} movies={movies} />
        ))}
      </MovieListSection>
      <Footer />
    </>
  );
};

export default Home;
