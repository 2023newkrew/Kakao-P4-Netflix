import React from 'react';
import MovieList from '../movie-list';

function App() {
  const movies = Array.from({ length: 20 }, (_, index) => ({
    id: `${index}`,
  }));

  return (
    <>
      <MovieList movies={movies} />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
