import { MovieSortType } from '@/models/movies.model';
import { obj2queryString } from '@utils/queryString';
import { customAxios } from './customAxios';

export const getMovies = async (sortType: MovieSortType) => {
  return await customAxios.get(`/movie/${sortType}`);
};
export const getMovie = async (movieID: number) => {
  return await customAxios.get(`/movie/${movieID}`);
};
export const getMovieVideo = async (movieID: number) => {
  return await customAxios.get(`/movie/${movieID}/videos`);
};

