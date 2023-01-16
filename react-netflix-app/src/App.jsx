import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes';
import Movie from './routes/movie/[id]';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<Movie />} />
  </Routes>
);

export default App;
