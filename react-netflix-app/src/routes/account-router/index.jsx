import { Route, Routes } from 'react-router-dom';
import { ROUTE_PATH, ROUTE } from '@/constants/route';
import Login from '@/containers/login';
import Register from '@/containers/register';

const AccountRouter = () => (
  <Routes>
    <Route path={ROUTE_PATH[ROUTE.LOGIN]} element={<Login />} />
    <Route path={ROUTE_PATH[ROUTE.REGISTER]} element={<Register />} />
  </Routes>
);

export default AccountRouter;
