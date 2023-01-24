import httpClient from '@api/http';

const MOVIE_URL = '/movie';

const fetcher = (path, params) => httpClient.get(MOVIE_URL + path, params);

export const getPopularMovies = () => fetcher('/popular');
export const getTopRatedMovies = () => fetcher('/top_rated');
export const getUpcomingMovies = (page = 1) => fetcher('/upcoming', { page });

export const getMovieDetail = (movieId) => fetcher(`/${movieId}`);
export const getSimilarMovie = (movieId) => fetcher(`/${movieId}/similar`);
export const getMovieVideos = (movieId) => fetcher(`/${movieId}/videos`);
