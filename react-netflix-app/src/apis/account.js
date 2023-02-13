import Account from '@/utils/account';

export const createAccount = async (username, email, password, passwordCheck) => {
  const response = await Account.post('/api/v1/account/register/', {
    username,
    email,
    password1: password,
    password2: passwordCheck,
  });
  return response;
};

export const loginAccount = async (email, password) => {
  const response = await Account.post('/api/v1/account/login/', {
    email,
    password,
  });

  return response;
};

export const logoutAccount = async () => {
  try {
    await Account.post('/api/v1/account/logout/');
    return true;
  } catch (_) {
    return false;
  }
};

export const verifyAccount = async (accessToken) => {
  try {
    await Account.post('/api/v1/account/token/verify/', {
      token: accessToken,
    });
    return true;
  } catch (_) {
    return false;
  }
};

export const refreshAccount = async (refreshToken) => {
  const response = await Account.post('/api/v1/account/token/refresh/', {
    refresh: refreshToken,
  });
  return response;
};

export const getAccount = async (accessToken) => {
  const response = await Account.get('/api/v1/account/user/', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

export const updateAccount = async (accessToken, firstName, lastName) => {
  const response = await Account.patch(
    '/api/v1/account/user/',
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
  return response;
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
  return response;
};
