import { Route, Routes } from 'react-router-dom';
import Home from '@/containers/home';

const HomeRouter = () => (
  <Routes>
    <Route index element={<Home />} />
  </Routes>
);

export default HomeRouter;
