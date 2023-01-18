import { customAxios } from './customAxios';
const apiKey = process.env.REACT_APP_ACCESS_TOKEN;

export const getPopularMovies = async () => {
  return await customAxios.get(`/movie/popular?api_key=${apiKey}`);
};

export const getLatestMovies = async () => {
  return await customAxios.get('/movie/latest');
};