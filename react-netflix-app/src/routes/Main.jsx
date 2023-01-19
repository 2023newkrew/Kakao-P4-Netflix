import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '@components/Banner';
import Slider from '@components/Slider';

export default function Main() {
  const [bannerMovie, setBannerMovie] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);

  const fetchPopularMovies = async () => {
    const {
      data: { results },
    } = await axios.get('/movie/popular');

    setBannerMovie(results[Math.floor(Math.random() * 20)]);
    setPopularMovies(results);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <>
      <Banner
        backgroundUrl={bannerMovie.backdrop_path}
        title={bannerMovie.title}
        overview={bannerMovie.overview}
      />
      <Slider name="지금 뜨는 콘텐츠" items={popularMovies} />
    </>
  );
}
