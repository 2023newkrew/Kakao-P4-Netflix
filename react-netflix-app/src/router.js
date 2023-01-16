import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/Main';
import ErrorPage from './pages/Error';
import LoginPage from './pages/Login';

const routes = [
  { path: '/', element: <MainPage />, errorElement: <ErrorPage /> },
  { path: '/login', element: <LoginPage /> },
];
const router = createBrowserRouter(routes);

export default router;
