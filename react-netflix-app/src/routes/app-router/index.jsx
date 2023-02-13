import { Route, Routes } from 'react-router-dom';
import { ROUTE, ROUTE_PATH } from '@/constants/route';
import MovieRouter from '../movie-router';
import HomeRouter from '../home-router';
import SearchRouter from '../search-router';
import AccountRouter from '../account-router';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTE_PATH[ROUTE.HOME]} element={<HomeRouter />} />
    <Route path={ROUTE_PATH[ROUTE.SEARCH]} element={<SearchRouter />} />
    <Route path={`${ROUTE_PATH[ROUTE.ACCOUNT]}/*`} element={<AccountRouter />} />
    <Route path={`${ROUTE_PATH[ROUTE.MOVIE]}/*`} element={<MovieRouter />} />
  </Routes>
);

export default AppRouter;
