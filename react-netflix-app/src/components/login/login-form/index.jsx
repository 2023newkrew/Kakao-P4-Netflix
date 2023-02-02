import { useCallback, useState } from 'react';
import { loginAccount } from '@/apis/account';
import { LoginFormButton, LoginFormContainer, LoginFormInput, LoginFormLabel } from './styles';

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const requestLogin = useCallback(async (email, password) => {
    // eslint-disable-next-line no-unused-vars
    const response = await loginAccount(email, password).catch((error) => {
      const errorMessages = Object.entries(error.response.data).map(
        ([key, value]) => `${key}: ${value}`,
      );
      setErrorMessage(errorMessages.join(' | '));
    });

    /* TODO: Save user info and tokens */
  }, []);

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
