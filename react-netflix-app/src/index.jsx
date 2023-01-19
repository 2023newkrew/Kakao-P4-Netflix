import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import GlobalStyle from '@styles/GlobalStyle';
import App from '@/App';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.params = {
  api_key: process.env.REACT_APP_API_KEY,
  language: 'ko-KR',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
