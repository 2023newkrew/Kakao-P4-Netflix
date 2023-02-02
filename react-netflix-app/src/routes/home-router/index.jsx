import { Route, Routes } from 'react-router-dom';
import Home from '@/containers/home';
import Search from '@/containers/search';
import { ROUTE, ROUTE_PATH } from '@/constants/route';

const HomeRouter = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTE_PATH[ROUTE.SEARCH]} element={<Search />} />
  </Routes>
);

export default HomeRouter;
