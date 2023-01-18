import { Header } from '@components/Header';
import { Layout } from '@components/Layout';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Routes from './Routes';
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle/>
    <Layout>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Layout>
  </React.StrictMode>
);