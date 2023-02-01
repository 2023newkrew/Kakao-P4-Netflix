import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useDebounce from '../../hooks/useDebounce';
import useSearchParam from '../../hooks/useSearchParam';
import ErrorView from '../error-view';
import Modal from '../modal';
import MovieDetail from '../movie-detail';
import MovieCard from '../movie-card';

const StyledDiv = styled.div`
  padding: 2rem;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 1rem;
  margin: auto;
  width: 100%;
  max-width: 1280px;
`;

const StyledListItem = styled.li`
  width: calc(20% - (1rem) / 5 * 4);
  aspect-ratio: 2/3;
`;

function SearchPage() {
  const query = useSearchParam('query');
  const debouncedQuery = useDebounce(query, 400) ?? '';

  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const lastPromiseRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openMovieDetailModal = (movie) => {
    if (isModalOpen) return;

    setIsModalOpen(true);
    setSelectedMovie(movie);
  };

  useEffect(() => {
    if (debouncedQuery === '') return;

    setIsLoading(true);
    (async () => {
      try {
        const currentPromise = axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=c14724951e1843e630f68881a3192a57&language=ko&query=${debouncedQuery}`
        );
        lastPromiseRef.current = currentPromise;
        const res = await currentPromise;

        if (lastPromiseRef.current === currentPromise) {
          setMovies(res.data.results);
          setIsLoading(false);
        }
      } catch (err) {
        setError(err);
      }
    })();
  }, [debouncedQuery]);

  if (error) return <ErrorView error={error} />;

  return (
    <>
      <StyledDiv>
        <div>
          {query}{' '}
          {!query || query !== debouncedQuery || isLoading
            ? '검색 중...'
            : `검색 결과: ${movies.length}개`}
        </div>
        {movies ? (
          <StyledList>
            {movies.map((movie) => (
              <StyledListItem
                key={movie.id}
                onClick={() => openMovieDetailModal(movie)}
              >
                <MovieCard movie={movie} />
              </StyledListItem>
            ))}
          </StyledList>
        ) : null}
      </StyledDiv>
      {isModalOpen ? (
        <Modal
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <MovieDetail movie={selectedMovie} />
        </Modal>
      ) : null}
    </>
  );
}

export default SearchPage;
