import { obj2queryString } from '@utils/queryString';
import { customAxios } from './customAxios';

const API_PREFIX = obj2queryString({
  language: 'ko-KR',
  api_key: process.env.REACT_APP_ACCESS_TOKEN
});

export const getPopularMovies = async () => {
  return await customAxios.get(`/movie/popular?${API_PREFIX}`);
};

export const getUpcomingMovies = async () => {
  return await customAxios.get(`/movie/upcoming?${API_PREFIX}`);
};

