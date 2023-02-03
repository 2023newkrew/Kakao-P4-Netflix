/* eslint-disable react-hooks/exhaustive-deps */
import NetflixLogoImg from '@assets/netflix-logo.svg';
import ProfileIconImg from '@assets/profile-icon.png';
import { useNavigate } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import useIsTop from '@/hooks/use-is-top';
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderNameContainer,
  HeaderProfile,
  HeaderRightContent,
  HeaderNameSpan,
} from './styles';
import HeaderSearchInput from './header-search-input';
import { ROUTE, ROUTE_PATH } from '@/constants/route';
import useUserStore from '@/stores/use-user-store';
import HeaderLogoutButton from './header-logout-button';

const Header = () => {
  const isTop = useIsTop();
  const { user, isLoggedIn } = useUserStore();
  const navigate = useNavigate();
  const userFullName = useMemo(() => `(${user.firstName} ${user.lastName})`, [user]);

  const navigateToHome = useCallback(() => {
    navigate(ROUTE_PATH[ROUTE.HOME]);
  }, [navigate]);

  const onClickName = useCallback(() => {
    navigate(`${ROUTE_PATH[ROUTE.ACCOUNT]}${ROUTE_PATH[ROUTE.PROFILE]}`);
  }, []);

  return (
    <HeaderContainer isTop={isTop}>
      <HeaderContent>
        <HeaderLogo src={NetflixLogoImg} onClick={navigateToHome} />
        <HeaderRightContent>
          <HeaderSearchInput />
          <HeaderProfile src={ProfileIconImg} />
          <HeaderNameContainer onClick={onClickName}>
            <HeaderNameSpan>{user.userName}</HeaderNameSpan>
            <HeaderNameSpan>{userFullName}</HeaderNameSpan>
          </HeaderNameContainer>
          {isLoggedIn && <HeaderLogoutButton />}
        </HeaderRightContent>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
