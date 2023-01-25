import { useMovieList } from '@/pages/Main/hooks/useMovies';
import MovieCarousel from '@pages/Main/components/MovieCarousel';
import { PageContainer, MainView, Row, PageTitle } from '@pages/Main/MainPage.style';
import MovieBanner from '@pages/Main/components/MovieBanner';
import Header from '@components/Header';
import Footer from '@components/Footer';

const Main = () => {
  const { isLoading, isError, topRatedMovies, popularMovies } = useMovieList();
  const randomIndex =
    isLoading.popular && !isError.popular ? 0 : Math.floor(Math.random() * popularMovies.results.length);

  return (
    <PageContainer>
      <Header />
      <MainView>
        <PageTitle>Netflix 홈</PageTitle>
        {!isError.popular && !isLoading.popular && <MovieBanner movie={popularMovies.results[randomIndex]} />}
        {isError.popular && <p>영화 정보를 불러오지 못했습니다.</p>}
        <Row.Container>
          <Row.Title>인기 영화</Row.Title>
          <Row.Content>
            {!isLoading.popular && !isError.popular && <MovieCarousel movies={popularMovies.results} />}
            {isError.popular && <p>영화 목록을 불러오지 못했습니다.</p>}
          </Row.Content>
        </Row.Container>
        <Row.Container>
          <Row.Title>평점 높은 영화</Row.Title>
          <Row.Content>
            {!isLoading.topRated && !isError.topRated && <MovieCarousel movies={topRatedMovies.results} />}
            {isError.topRated && <p>영화 목록을 불러오지 못했습니다.</p>}
          </Row.Content>
        </Row.Container>
      </MainView>
      <Footer />
    </PageContainer>
  );
};
export default Main;
