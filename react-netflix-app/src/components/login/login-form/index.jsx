import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { loginAccount } from '@/apis/account';
import { LoginFormButton, LoginFormContainer, LoginFormInput, LoginFormLabel } from './styles';
import useUserStore from '@/stores/use-user-store';
import { ROUTE, ROUTE_PATH } from '@/constants/route';

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { setIsLoggedIn, setUser } = useUserStore();
  const navigate = useNavigate();

  const requestLogin = useCallback(
    async (email, password) => {
      const response = await loginAccount(email, password).catch((error) => {
        const errorMessages = Object.entries(error.response.data).map(
          ([key, value]) => `${key}: ${value}`,
        );
        setErrorMessage(errorMessages.join(' '));
      });

      if (!response) return;

      const { user, access_token: accessToken, refresh_token: refreshToken } = response.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setUser({
        email: user.email,
        userName: user.username,
        firstName: user.first_name,
        lastName: user.last_name,
      });
      setIsLoggedIn(true);
      navigate(ROUTE_PATH[ROUTE.HOME]);
    },
    [setUser, setIsLoggedIn, navigate],
  );

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      requestLogin(email.value, password.value);
    },
    [requestLogin],
  );

  return (
    <LoginFormContainer onSubmit={onSubmit}>
      <LoginFormLabel htmlFor="email">
        Email
        <LoginFormInput type="email" name="email" id="email" />
      </LoginFormLabel>

      <LoginFormLabel htmlFor="password">
        Password
        <LoginFormInput type="password" name="password" id="password" />
      </LoginFormLabel>

      <LoginFormButton type="submit">Login</LoginFormButton>
      {errorMessage && <p>{errorMessage}</p>}
    </LoginFormContainer>
  );
};

export default LoginForm;
