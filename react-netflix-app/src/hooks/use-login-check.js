import { refreshAccount, verifyAccount } from '@/apis/account';
import { LOCAL_STORAGE_ACCESS_TOKEN, LOCAL_STORAGE_REFRESH_TOKEN } from '@/constants/storage';

const { useEffect } = require('react');

const useLoginCheck = ({ loggedInCallback, loggedOutCallback, refresh = true } = {}) => {
  useEffect(() => {
    const checkLogin = async () => {
      const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);
      const refreshToken = localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN);

      if (!accessToken) {
        loggedOutCallback?.();
        return;
      }

      if (await verifyAccount(accessToken)) {
        loggedInCallback?.();
        return;
      }

      if (!refresh || !refreshToken) {
        loggedOutCallback?.();
        return;
      }

      try {
        const response = await refreshAccount(refreshToken);
        localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, response.data.access);
      } catch (err) {
        loggedOutCallback?.();
      }
    };

    checkLogin();
  }, [loggedInCallback, loggedOutCallback, refresh]);
};

export default useLoginCheck;
