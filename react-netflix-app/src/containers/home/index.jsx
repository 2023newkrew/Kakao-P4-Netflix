import MovieList from '@components/home/movie-list';
import Footer from '@components/common/footer';
import Header from '@components/common/header';
import Hero from '@components/home/hero';
import { useEffect, useState } from 'react';
import { getNowPlaying } from '@apis/home';
import { rand } from '@/utils/math';
import { MOVIE_LIST, MOVIE_LIST_TITLE } from '@/constants/movie';

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [heroMovie, setHeroMovie] = useState({});

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      const { results } = data;

      setNowPlaying(results);
      setHeroMovie(results[rand({ max: results.length }) - 1 || 0]);
    };
    fetchNowPlaying();
  }, []);

  return (
    <>
      <Header />
      <Hero movie={heroMovie} />
      <MovieList title={MOVIE_LIST_TITLE[MOVIE_LIST.NOW_PLAYING]} movies={nowPlaying} />
      {/* TODO: Fetch more movies and display it using .map */}
      <Footer />
    </>
  );
};

export default Home;
