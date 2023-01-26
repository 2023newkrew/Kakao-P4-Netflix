import NetflixLogoImg from '@assets/netflix-logo.svg';
import ProfileIconImg from '@assets/profile-icon.png';
import useIsTop from '@/hooks/use-is-top';
import { HeaderContainer, HeaderContent, HeaderLogo, HeaderProfile } from './styles';

const Header = () => {
  const isTop = useIsTop();

  return (
    <HeaderContainer isTop={isTop}>
      <HeaderContent>
        <HeaderLogo src={NetflixLogoImg} />
        <HeaderProfile src={ProfileIconImg} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
