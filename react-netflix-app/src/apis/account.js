/* eslint-disable import/prefer-default-export */
import Account from '@/utils/account';

export const createAccount = async (username, email, password, passwordCheck) => {
  const response = await Account.post('/api/v1/account/register/', {
    username,
    email,
    password1: password,
    password2: passwordCheck,
  });
  return response.data;
};

export const loginAccount = async (email, password) => {
  const response = await Account.post('/api/v1/account/login/', {
    email,
    password,
  });
  return response.data;
};

export const logoutAccount = async () => {
  const response = await Account.post('/api/v1/account/logout/');
  return response.data;
};

export const verifyAccount = async (accessToken) => {
  const response = await Account.post('/api/v1/account/token/verify/', {
    token: accessToken,
  });
  return response.data;
};

export const refreshAccount = async (refreshToken) => {
  const response = await Account.post('/api/v1/account/token/refresh/', {
    refresh: refreshToken,
  });
  return response.data;
};

export const getAccount = async (accessToken) => {
  const response = await Account.get('/api/v1/account/', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const updateAccount = async (accessToken, firstName, lastName) => {
  const response = await Account.patch(
    '/api/v1/account/',
    {
      first_name: firstName,
      last_name: lastName,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return response.data;
};

export const changePassword = async (accessToken, newPassword, newPasswordCheck) => {
  const response = await Account.post(
    '/api/v1/account/password/change/',
    {
      new_password1: newPassword,
      new_password2: newPasswordCheck,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return response.data;
};
