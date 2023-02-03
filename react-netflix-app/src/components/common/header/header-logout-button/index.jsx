import { useNavigate } from 'react-router-dom';
import { logoutAccount } from '@/apis/account';
import { ROUTE, ROUTE_PATH } from '@/constants/route';
import useUserStore from '@/stores/use-user-store';
import { LOCAL_STORAGE_ACCESS_TOKEN, LOCAL_STORAGE_REFRESH_TOKEN } from '@/constants/storage';
import { LogoutButton } from './styles';

const HeaderLogoutButton = () => {
  const navigate = useNavigate();
  const { logoutUser } = useUserStore();

  const onClick = () => {
    logoutAccount().then(() => {
      logoutUser();
      navigate(`${ROUTE_PATH[ROUTE.ACCOUNT]}${ROUTE_PATH[ROUTE.LOGIN]}`);
      localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN);
      localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN);
    });
  };

  return <LogoutButton onClick={onClick}>Logout</LogoutButton>;
};

export default HeaderLogoutButton;
