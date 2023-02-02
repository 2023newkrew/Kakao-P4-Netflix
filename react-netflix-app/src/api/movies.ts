import { Movie } from '@/types/movie';
import httpClient from '@api/http';
import { AxiosResponse } from 'axios';

const MOVIE_URL = '/movie';

const fetcher = (path: string, params?: { [key: string]: any }) => httpClient.get(MOVIE_URL + path, { params });

interface PagedResponse {
  page: number;
  results: any;
  total_pages: number;
  total_results: number;
}
export interface MovieResponse extends PagedResponse {
  results: Movie;
}
export interface MoviesResponse extends PagedResponse {
  results: Movie[];
}
type ApiResponse<T> = Promise<AxiosResponse<T>>;
export type MoviesApiResponse = ApiResponse<MoviesResponse>;
export type MovieApiResponse = ApiResponse<MovieResponse>;

export const getPopularMovies = (): MoviesApiResponse => fetcher('/popular');
export const getTopRatedMovies = (): MoviesApiResponse => fetcher('/top_rated');
export const getUpcomingMovies = (page = 1): MovieApiResponse => fetcher('/upcoming', { page });

export const getMovieDetail = (movieId: number) => fetcher(`/${movieId}`);
export const getSimilarMovie = (movieId: number) => fetcher(`/${movieId}/similar`);
export const getMovieVideos = (movieId: number) => fetcher(`/${movieId}/videos`);
