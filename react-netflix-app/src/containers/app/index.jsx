import { useNavigate } from 'react-router-dom';
import AppRouter from '@/routes/app-router';
import useLoginCheck from '@/hooks/use-login-check';
import { ROUTE, ROUTE_PATH } from '@/constants/route';
import useUserStore from '@/stores/use-user-store';
import { getAccount } from '@/apis/account';
import { LOCAL_STORAGE_ACCESS_TOKEN } from '@/constants/storage';

const App = () => {
  const navigate = useNavigate();
  const { setUser, setIsLoggedIn } = useUserStore();

  const loggedInCallback = () => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);
    getAccount(accessToken).then(({ data }) => {
      const { email, username: userName, first_name: firstName, last_name: lastName } = data;

      setUser({
        email,
        userName,
        firstName,
        lastName,
      });
      setIsLoggedIn(true);
    });
  };

  const loggedOutCallback = () => {
    navigate(`${ROUTE_PATH[ROUTE.ACCOUNT]}${ROUTE_PATH[ROUTE.LOGIN]}`);
  };

  useLoginCheck({
    loggedInCallback,
    loggedOutCallback,
  });

  return <AppRouter />;
};

export default App;
