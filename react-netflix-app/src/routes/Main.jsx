import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Banner from '@components/Banner';
import Slider from '@components/Slider';

const MainLayout = styled.main``;

const SliderContainer = styled.section`
  margin-top -10%;
`;

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
    <MainLayout>
      <Banner
        backgroundUrl={bannerMovie.backdrop_path}
        title={bannerMovie.title}
        overview={bannerMovie.overview}
      />
      <SliderContainer>
        <Slider name="지금 뜨는 콘텐츠" items={popularMovies} />
      </SliderContainer>
    </MainLayout>
  );
}
