import { Route, Routes } from 'react-router-dom';
import Movie from '@containers/movie/[id]';

const MovieRouter = () => (
  <Routes>
    <Route path="/:id" element={<Movie />} />
  </Routes>
);

export default MovieRouter;
