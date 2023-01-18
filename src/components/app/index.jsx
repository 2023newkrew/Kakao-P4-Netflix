import React from 'react';
import MovieList from '../movie-list';

function App() {
  const movies = Array.from({ length: 20 }, (_, index) => ({ id: `${index}` }));

  return (
    <>
      <MovieList initialMovies={movies} />
      <MovieList initialMovies={movies} />
    </>
  );
}

export default App;
