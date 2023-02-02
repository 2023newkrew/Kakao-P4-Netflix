import { useEffect } from 'react';
import { useSearchParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useModal } from '@components/Modal';
import { useModalContext } from '@components/Modal/ModalContext';
import MovieDetail from '@pages/Main/[id]';
import useMovieDetail from '@components/Movie/useMovieDetail';

const useMovieDetailModal = (movieId: string | null) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const position = location.state?.position;
  const openModal = useModal();
  const { data, error, isLoading } = useMovieDetail(movieId);

  useEffect(() => {
    if (!movieId || isLoading || error || !data) {
      return;
    }

    openModal({
      node: <MovieDetail movie={data} />,
      position,
      onClose() {
        searchParams.delete('movie');
        setSearchParams(searchParams);
      },
    });
  }, [movieId, data, error, isLoading]);
};

const useMovieDetailRoutes = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get('movie');
  const { close } = useModalContext();

  useEffect(() => {
    if (movieId) {
      return;
    }

    close();
  }, [movieId]);

  return movieId;
};

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movieId = useMovieDetailRoutes();
  useMovieDetailModal(movieId);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/browse', { replace: true });
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
