import { Link } from 'react-router-dom';
import { ROUTE, ROUTE_PATH } from '@/constants/route';

import LoginForm from '@/components/login/login-form';

const Login = () => (
  <>
    <LoginForm />
    <p>
      Don&apos;t have an account?{' '}
      <Link to={`${ROUTE_PATH[ROUTE.ACCOUNT]}/${ROUTE_PATH[ROUTE.REGISTER]}`}>Register</Link>
    </p>
  </>
);

export default Login;
