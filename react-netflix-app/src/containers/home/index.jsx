import MovieList from '@components/home/movie-list';
import Footer from '@components/common/footer';
import Header from '@components/common/header';
import Hero from '@components/home/hero';
import { useEffect, useState } from 'react';
import { getNowPlaying } from '@apis/home';
import { rand } from '@/utils/math';

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
      <MovieList title="Now Playing Movies" movies={nowPlaying} />
      <Footer />
    </>
  );
};

export default Home;
