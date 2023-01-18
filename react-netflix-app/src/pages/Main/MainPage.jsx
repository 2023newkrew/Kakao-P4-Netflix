import { useMovieList } from '@pages/Main/useMovies';
import MovieCarousel from '@/pages/Main/components/MovieCarousel';
import { PageContainer, MainView, Row, PageTitle } from '@pages/Main/MainPage.style';
import Header from '@components/Header';
import MovieBanner from './components/MovieBanner';

const Main = () => {
  const { isLoading, topRatedMovies, popularMovies } = useMovieList();
  return (
    <PageContainer>
      <Header />
      <MainView>
        <PageTitle>Netflix 홈</PageTitle>
        <MovieBanner />
        <Row.Container>
          <Row.Title>인기 영화</Row.Title>
          <Row.Content>
            {!isLoading.popular && popularMovies && <MovieCarousel movies={popularMovies.results} />}
          </Row.Content>
        </Row.Container>
        <Row.Container>
          <Row.Title>평점 높은 영화</Row.Title>
          <Row.Content>
            {!isLoading.topRated && topRatedMovies && <MovieCarousel movies={topRatedMovies.results} />}
          </Row.Content>
        </Row.Container>
      </MainView>
    </PageContainer>
  );
};
export default Main;
