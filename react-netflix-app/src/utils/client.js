import axios from 'axios';

const Client = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

Client.interceptors.request.use((config) => {
  const newConfig = { ...config };
  newConfig.params = {
    ...config.params,
    api_key: process.env.REACT_APP_MOVIE_API_KEY,
    language: 'ko',
  };
  return newConfig;
});

export default Client;
