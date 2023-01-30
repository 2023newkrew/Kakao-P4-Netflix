import { useEffect } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useModalContext } from '@components/Modal/ModalContext';
import useMovieDetailModal from '@pages/Main/[id]';

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
  const movieId = useMovieDetailRoutes();
  useMovieDetailModal(movieId);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
