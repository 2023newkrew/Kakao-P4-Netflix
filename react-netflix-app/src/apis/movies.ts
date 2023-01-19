import { customAxios } from './customAxios';
const apiKey = process.env.REACT_APP_ACCESS_TOKEN;

export const getPopularMovies = async () => {
  return await customAxios.get(`/movie/popular?language=ko-KR&api_key=${apiKey}`);
};

export const getUpcomingMovies = async () => {
  return await customAxios.get(`/movie/upcoming?language=ko-KR&api_key=${apiKey}`);
};

