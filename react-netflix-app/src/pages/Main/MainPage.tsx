import { useMovieList } from '@/pages/Main/hooks/useMovies';
import MovieCarousel from '@pages/Main/components/MovieCarousel';
import { PageContainer, MainView, Row, PageTitle } from '@pages/Main/MainPage.style';
import MovieBanner from '@pages/Main/components/MovieBanner';

const Main = () => {
  const { isLoading, errors, topRatedMovies, popularMovies } = useMovieList();

  const randomIndex =
    popularMovies?.results && popularMovies.results.length > 0
      ? Math.floor(Math.random() * popularMovies.results.length)
      : 0;

  return (
    <PageContainer>
      <MainView>
        <PageTitle>Netflix 홈</PageTitle>
        {popularMovies?.results[randomIndex] ? <MovieBanner movie={popularMovies.results[randomIndex]} /> : null}
        {errors.popular ? <p>영화 정보를 불러오지 못했습니다.</p> : null}
        <Row.Container>
          <Row.Title>인기 영화</Row.Title>
          <Row.Content>
            {!isLoading.popular && !errors.popular && <MovieCarousel movies={popularMovies?.results ?? []} />}
            {errors.popular && <p>영화 목록을 불러오지 못했습니다.</p>}
          </Row.Content>
        </Row.Container>
        <Row.Container>
          <Row.Title>평점 높은 영화</Row.Title>
          <Row.Content>
            {!isLoading.topRated && !errors.topRated && <MovieCarousel movies={topRatedMovies?.results ?? []} />}
            {errors.topRated && <p>영화 목록을 불러오지 못했습니다.</p>}
          </Row.Content>
        </Row.Container>
      </MainView>
    </PageContainer>
  );
};
export default Main;
