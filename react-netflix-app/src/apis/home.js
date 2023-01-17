/* eslint-disable import/prefer-default-export */

import Client from '@utils/client';

export const getHero = async () => {
  const response = await Client.get('/movie/now_playing');
  // TODO: Replace with a better way to get the first result
  return response.data.results[0];
};
