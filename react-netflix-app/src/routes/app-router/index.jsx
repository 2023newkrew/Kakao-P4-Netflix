import { Route, Routes } from 'react-router-dom';
import { ROUTE, ROUTE_PATH } from '@/constants/route';
import Home from '@/containers/home';
import MovieRouter from '../movie-router';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTE_PATH[ROUTE.HOME]} element={<Home />} />
    <Route path={`${ROUTE_PATH[ROUTE.MOVIE]}/*`} element={<MovieRouter />} />
  </Routes>
);

export default AppRouter;
