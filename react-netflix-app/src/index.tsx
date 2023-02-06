import { Header } from '@components/layout/Header';
import { Layout } from '@components/layout/Layout';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Routes from './Routes';
import GlobalStyle from './GlobalStyle';
import { GlobalPortal } from './GlobalPortal';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle/>
    <RecoilRoot>
      <GlobalPortal.Provider>
        <Layout>
          <BrowserRouter>
            <Routes />
            <Header />
          </BrowserRouter>
        </Layout>
      </GlobalPortal.Provider>
    </RecoilRoot>
  </React.StrictMode>
);