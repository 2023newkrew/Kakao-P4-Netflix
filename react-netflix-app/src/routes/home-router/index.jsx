import { Route, Routes } from 'react-router-dom';
import Home from '@/containers/home';
import Search from '@/containers/search';
import { ROUTE, ROUTE_PATH } from '@/constants/route';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

const HomeRouter = () => (
  <>
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTE_PATH[ROUTE.SEARCH]} element={<Search />} />
    </Routes>
    <Footer />
  </>
);

export default HomeRouter;
