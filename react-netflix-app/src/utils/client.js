import axios from 'axios';
import { CLIENT_HEADERS, CLIENT_INTERCEPTORS_REQUEST } from '@configs/client';

const Client = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_API_URL,
  headers: CLIENT_HEADERS,
});

Client.interceptors.request.use(CLIENT_INTERCEPTORS_REQUEST);

export default Client;
