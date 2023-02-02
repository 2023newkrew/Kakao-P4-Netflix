import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@components/Header';
import Main from '@routes';
import Search from '@routes/search';
import NotFound from '@routes/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
