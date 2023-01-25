import MovieList from '@components/home/movie-list';
import Footer from '@components/common/footer';
import Header from '@components/common/header';
import Hero from '@components/home/hero';
import { useEffect, useState } from 'react';
import { getNowPlaying, getPopular, getToprated, getUpcoming } from '@apis/home';
import { rand } from '@/utils/math';
import { MOVIE_LIST, MOVIE_LIST_TITLE } from '@/constants/movie';

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
        getNowPlaying(),
        getPopular(),
        getToprated(),
        getUpcoming(),
      ]);

      const { results } = nowPlayingData;

      setNowPlaying(results);
      setPopular(popularData.results);
      setToprated(topratedData.results);
      setUpcoming(upcomingData.results);
      setHeroMovie(results[rand({ max: results.length }) - 1 || 0]);
    };
    fetchNowPlaying();
  }, []);

  return (
    <>
      <Header />
      <Hero movie={heroMovie} />
      {movieLists.map(([title, movies]) => (
        <MovieList key={title} title={MOVIE_LIST_TITLE[title]} movies={movies} />
      ))}
      <Footer />
    </>
  );
};

export default Home;
