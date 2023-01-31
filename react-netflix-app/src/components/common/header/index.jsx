import NetflixLogoImg from '@assets/netflix-logo.svg';
import ProfileIconImg from '@assets/profile-icon.png';
import useIsTop from '@/hooks/use-is-top';
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderProfile,
  HeaderRightContent,
} from './styles';
import HeaderSearchInput from './header-search-input';

const Header = () => {
  const isTop = useIsTop();

  return (
    <HeaderContainer isTop={isTop}>
      <HeaderContent>
        <HeaderLogo src={NetflixLogoImg} />
        <HeaderRightContent>
          <HeaderSearchInput />
          <HeaderProfile src={ProfileIconImg} />
        </HeaderRightContent>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
