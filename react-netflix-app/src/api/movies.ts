import { Movie, MovieDetail, MovieVideo } from '@/types/movie';
import httpClient from '@api/http';
import { AxiosResponse } from 'axios';

const MOVIE_URL = '/movie';

const fetcher = (path: string, params?: { [key: string]: any }) => httpClient.get(MOVIE_URL + path, { params });

interface PagedResponse<T> {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}
export type MovieResponse = PagedResponse<Movie>;
export type MoviesResponse = PagedResponse<Movie[]>;

type ApiResponse<T> = Promise<AxiosResponse<T>>;
export type MoviesApiResponse = ApiResponse<MoviesResponse>;

export const getPopularMovies = (): MoviesApiResponse => fetcher('/popular');
export const getTopRatedMovies = (): MoviesApiResponse => fetcher('/top_rated');
export const getUpcomingMovies = (page = 1): MoviesApiResponse => fetcher('/upcoming', { page });
export const getSimilarMovies = (movieId: number): MoviesApiResponse => fetcher(`/${movieId}/similar`);

export const getMovieDetail = (movieId: number): ApiResponse<MovieDetail> => fetcher(`/${movieId}`);

interface VideoResponse {
  id: number;
  results: MovieVideo[];
}
export const getMovieVideos = (movieId: number): ApiResponse<VideoResponse> => fetcher(`/${movieId}/videos`);
