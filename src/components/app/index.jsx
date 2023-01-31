import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoPage from '../video-page';
import MainPage from '../main-page';
import Navigator from '../navigator';
import SearchPage from '../search-page';
import Transition from '../transition';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navigator />
        <Transition>
          <MainPage key="mainPage" />
        </Transition>
      </>
    ),
  },
  {
    path: '/search',
    element: (
      <>
        <Navigator />
        <Transition>
          <SearchPage key="searchPage" />
        </Transition>
      </>
    ),
  },
  {
    path: '/videos/:id',
    element: <VideoPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
