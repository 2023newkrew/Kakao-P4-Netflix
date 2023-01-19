import React, { useEffect, useState } from 'react';
import Header from '@components/Header';
import Banner from '@components/Banner';
import axios from 'axios';

export default function App() {
  const [bannerMovie, setBannerMovie] = useState({});

  const fetchPopularMovies = async () => {
    const {
      data: { results },
    } = await axios.get('/movie/popular');

    setBannerMovie(results[Math.floor(Math.random() * 20)]);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <>
      <Header />
      <Banner
        backgroundUrl={bannerMovie.backdrop_path}
        title={bannerMovie.title}
        overview={bannerMovie.overview}
      />
    </>
  );
}
