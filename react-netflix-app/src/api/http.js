import axios from 'axios';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const httpClient = axios.create({
  baseURL: TMDB_BASE_URL,
});

const handleRequest = (config) => {
  config.params = { api_key: process.env.REACT_APP_TMDB_API_KEY, language: 'ko-KR', ...config.params };
  return config;
};
const handleError = (error) => Promise.reject(error);

httpClient.interceptors.request.use(handleRequest, handleError);

export default httpClient;
