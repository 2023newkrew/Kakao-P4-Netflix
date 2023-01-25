import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navigator from '../navigator';
import Banner from '../banner';
import Footer from '../footer';
import MovieListContainer from '../movie-list-container';
import MovieList from '../movie-list';
import MovieListItem from '../movie-list-item';
import MovieCard from '../movie-card';
import Modal from '../modal';
import MovieDetail from '../movie-detail';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

function App() {
  const [movies, setMovies] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openMovieDetailModal = (movie) => {
    if (isModalOpen) return;

    setIsModalOpen(true);
    setSelectedMovie(movie);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=c14724951e1843e630f68881a3192a57&language=ko`
      );

      setMovies(res.data.results);
    })();
  }, []);

  if (!movies) return null;

  const bannerMovie = movies[0];

  return (
    <>
      <Navigator />
      <Banner
        movie={bannerMovie}
        onDetailClick={() => openMovieDetailModal(bannerMovie)}
      />
      <StyledDiv>
        <MovieListContainer title="넷플릭스 인기 콘텐츠">
          <MovieList>
            {movies.map((movie) => (
              <MovieListItem
                key={movie.id}
                onClick={() => openMovieDetailModal(movie)}
              >
                <MovieCard movie={movie} />
              </MovieListItem>
            ))}
          </MovieList>
        </MovieListContainer>
        <MovieListContainer title="지금 뜨는 콘텐츠">
          <MovieList>
            {movies.map((movie) => (
              <MovieListItem
                key={movie.id}
                onClick={() => openMovieDetailModal(movie)}
              >
                <MovieCard movie={movie} />
              </MovieListItem>
            ))}
          </MovieList>
        </MovieListContainer>
        <MovieListContainer title="새로 올라온 콘텐츠">
          <MovieList>
            {movies.map((movie) => (
              <MovieListItem
                key={movie.id}
                onClick={() => openMovieDetailModal(movie)}
              >
                <MovieCard movie={movie} />
              </MovieListItem>
            ))}
          </MovieList>
        </MovieListContainer>
      </StyledDiv>
      <Footer />
      <Modal onClose={handleModalClose}>
        {isModalOpen && !!selectedMovie ? (
          <MovieDetail movie={selectedMovie} />
        ) : (
          ''
        )}
      </Modal>
    </>
  );
}

export default App;
