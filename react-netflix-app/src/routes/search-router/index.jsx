import { Route, Routes } from 'react-router-dom';
import Search from '@/containers/search';

const SearchRouter = () => (
  <Routes>
    <Route index element={<Search />} />
  </Routes>
);

export default SearchRouter;
