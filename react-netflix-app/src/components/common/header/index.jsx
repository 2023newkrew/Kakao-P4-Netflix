import NetflixLogoImg from '@assets/netflix-logo.svg';
import ProfileIconImg from '@assets/profile-icon.png';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import useIsTop from '@/hooks/use-is-top';
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderProfile,
  HeaderRightContent,
  HeaderUsername,
} from './styles';
import HeaderSearchInput from './header-search-input';
import { ROUTE, ROUTE_PATH } from '@/constants/route';
import useUserStore from '@/stores/use-user-store';

const Header = () => {
  const isTop = useIsTop();
  const { user } = useUserStore();
  const navigate = useNavigate();

  const navigateToHome = useCallback(() => {
    navigate(ROUTE_PATH[ROUTE.HOME]);
  }, [navigate]);

  return (
    <HeaderContainer isTop={isTop}>
      <HeaderContent>
        <HeaderLogo src={NetflixLogoImg} onClick={navigateToHome} />
        <HeaderRightContent>
          <HeaderSearchInput />
          <HeaderProfile src={ProfileIconImg} />
          <HeaderUsername>{user.userName}</HeaderUsername>
        </HeaderRightContent>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
