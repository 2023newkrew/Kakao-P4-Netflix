import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '../main-page';
import Navigator from '../navigator';
import SearchPage from '../search-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navigator />
        <MainPage />
      </>
    ),
  },
  {
    path: '/search',
    element: (
      <>
        <Navigator />
        <SearchPage />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
