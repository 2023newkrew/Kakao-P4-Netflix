import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@pages/Main/MainPage';
import ErrorPage from '@pages/Error';
import LoginPage from '@pages/Login';
import SearchPage from '@pages/Search/SearchPage';
import App from './App';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/browse', element: <MainPage /> },
      { path: '/search', element: <SearchPage /> },
    ],
  },
  ,
  { path: '/login', element: <LoginPage /> },
];
const router = createBrowserRouter(routes);

export default router;
