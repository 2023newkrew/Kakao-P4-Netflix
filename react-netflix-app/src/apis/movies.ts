import { MovieSortType } from '@/models/movies.model';
import { obj2queryString } from '@utils/queryString';
import { customAxios } from './customAxios';

const API_PREFIX = obj2queryString({
  language: 'ko-KR',
  api_key: process.env.REACT_APP_ACCESS_TOKEN
});

export const getMovies = async (sortType: MovieSortType) => {
  return await customAxios.get(`/movie/${sortType}?${API_PREFIX}`);
};

