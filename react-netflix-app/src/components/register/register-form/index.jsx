import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '@/apis/account';
import {
  RegisterFormButton,
  RegisterFormContainer,
  RegisterFormInput,
  RegisterFormLabel,
} from './styles';
import { ROUTE, ROUTE_PATH } from '@/constants/route';

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const requestRegister = useCallback(
    (email, username, password, password2) => {
      createAccount(username, email, password, password2)
        .then(() => {
          navigate(`${ROUTE_PATH[ROUTE.ACCOUNT]}${ROUTE_PATH[ROUTE.LOGIN]}`);
        })
        .catch((error) => {
          const errorMessages = Object.entries(error.response.data).map(
            ([key, value]) => `${key}: ${value}`,
          );
          setErrorMessage(errorMessages.join(' '));
        });
    },
    [navigate],
  );

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const { email, username, password, password2 } = event.target.elements;
      requestRegister(email.value, username.value, password.value, password2.value);
    },
    [requestRegister],
  );

  return (
    <RegisterFormContainer onSubmit={onSubmit}>
      <RegisterFormLabel htmlFor="email">
        Email
        <RegisterFormInput type="email" name="email" id="email" />
      </RegisterFormLabel>
      <RegisterFormLabel htmlFor="username">
        User Name
        <RegisterFormInput type="text" name="username" id="username" />
      </RegisterFormLabel>
      <RegisterFormLabel htmlFor="password">
        Password
        <RegisterFormInput type="password" name="password" id="password" />
      </RegisterFormLabel>
      <RegisterFormLabel htmlFor="password2">
        Confirm Password
        <RegisterFormInput type="password" name="password2" id="password2" />
      </RegisterFormLabel>
      <RegisterFormButton type="submit">Register</RegisterFormButton>
      {errorMessage && <div>{errorMessage}</div>}
    </RegisterFormContainer>
  );
};

export default RegisterForm;
