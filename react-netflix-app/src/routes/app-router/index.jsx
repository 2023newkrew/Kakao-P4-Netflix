import { Route, Routes } from 'react-router-dom';
import { ROUTE, ROUTE_PATH } from '@/constants/route';
import MovieRouter from '../movie-router';
import HomeRouter from '../home-router';

const AppRouter = () => (
  <Routes>
    <Route path="/*" element={<HomeRouter />} />
    <Route path={`${ROUTE_PATH[ROUTE.MOVIE]}/*`} element={<MovieRouter />} />
  </Routes>
);

export default AppRouter;
