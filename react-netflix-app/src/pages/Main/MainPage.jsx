import { useMovieList } from '@pages/Main/useMovies';
import MovieCarousel from '@/pages/Main/components/MovieCarousel';
import { PageContainer, MainView, Row, PageTitle } from '@pages/Main/MainPage.style';
import Header from '@components/Header';
import MovieBanner from './components/MovieBanner';
import Footer from '@/components/Footer';

const Main = () => {
  const { isLoading, topRatedMovies, popularMovies } = useMovieList();
  const randomIndex = isLoading.popular ? 0 : Math.floor(Math.random() * popularMovies.results.length);

  return (
    <PageContainer>
      <Header />
      <MainView>
        <PageTitle>Netflix 홈</PageTitle>
        {!isLoading.popular && <MovieBanner movie={popularMovies.results[randomIndex]} />}
        <Row.Container>
          <Row.Title>인기 영화</Row.Title>
          <Row.Content>{!isLoading.popular && <MovieCarousel movies={popularMovies.results} />}</Row.Content>
        </Row.Container>
        <Row.Container>
          <Row.Title>평점 높은 영화</Row.Title>
          <Row.Content>{!isLoading.topRated && <MovieCarousel movies={topRatedMovies.results} />}</Row.Content>
        </Row.Container>
      </MainView>
      <Footer />
    </PageContainer>
  );
};
export default Main;
