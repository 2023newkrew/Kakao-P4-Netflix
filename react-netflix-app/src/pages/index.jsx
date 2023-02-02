import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PageLayout from '@layouts/PageLayout';
import Banner from '@components/Banner';
import MovieSlider from '@components/slider/MovieSlider';
import useAxios from '@hooks/useAxios';

const MainPage = styled.main``;

const SliderContainer = styled.section`
  margin-top: -10%;
`;

export default function Main() {
  const [isLoading, data] = useAxios('get', '/movie/popular');
  const [bannerMovie, setBannerMovie] = useState({
    backdrop_path: '',
    title: '',
    overview: '',
  });
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    if (!data) return;

    const { results } = data;
    setBannerMovie(results[Math.floor(Math.random() * 20)]);
    setPopularMovies(results);
  }, [data]);

  return (
    <PageLayout>
      <MainPage>
        <Banner isLoading={isLoading} movie={bannerMovie} />
        <SliderContainer>
          <MovieSlider name="지금 뜨는 콘텐츠" movies={popularMovies} />
        </SliderContainer>
      </MainPage>
    </PageLayout>
  );
}
