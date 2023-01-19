import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '@components/Banner';

export default function Main() {
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
    <Banner
      backgroundUrl={bannerMovie.backdrop_path}
      title={bannerMovie.title}
      overview={bannerMovie.overview}
    />
  );
}
