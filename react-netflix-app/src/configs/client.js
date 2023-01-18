/* eslint-disable import/prefer-default-export */

export const CLIENT_INTERCEPTORS_REQUEST = (config) => {
  const newConfig = { ...config };
  newConfig.params = {
    ...config.params,
    api_key: process.env.REACT_APP_MOVIE_API_KEY,
    language: 'ko',
  };
  return newConfig;
};

export const CLIENT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
