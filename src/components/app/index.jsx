import React from 'react';
import Navigator from '../navigator';
import Banner from '../banner';
import Footer from '../footer';
import MovieList from '../movie-list';

function App() {
  const movies = Array.from({ length: 20 }, (_, index) => ({
    id: `${index}`,
  }));

  return (
    <>
      <Navigator />
      <Banner movie={movies[0]} />
      <MovieList movies={movies} />
      <MovieList movies={movies} />
      {/* <MovieList movies={movies} /> */}
      <Footer />
    </>
  );
}

export default App;
