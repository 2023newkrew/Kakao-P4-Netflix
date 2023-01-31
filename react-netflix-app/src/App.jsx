import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@components/Header';
import NotFound from '@routes/NotFound';
import Main from '@/routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
