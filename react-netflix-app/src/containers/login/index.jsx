import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@/components/login/login-form';
import RegisterText from '@/components/login/register-text';
import { ROUTE, ROUTE_PATH } from '@/constants/route';
import useUserStore from '@/stores/use-user-store';

const Login = () => {
  const { isLoggedIn } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(ROUTE_PATH[ROUTE.HOME]);
    }
  }, [navigate, isLoggedIn]);

  return (
    <>
      <LoginForm />
      <RegisterText />
    </>
  );
};

export default Login;
