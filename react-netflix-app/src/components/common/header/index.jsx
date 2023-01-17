import NetflixLogoImg from '@assets/netflix-logo.svg';
import ProfileIconImg from '@assets/profile-icon.png';
import usePageScroll from '@hooks/use-page-scroll';
import { HeaderContainer, HeaderContent, HeaderLogo, HeaderProfile } from './styles';

const Header = () => {
  const pageYOffset = usePageScroll();

  return (
    <HeaderContainer isTop={pageYOffset === 0}>
      <HeaderContent>
        <HeaderLogo src={NetflixLogoImg} />
        <HeaderProfile src={ProfileIconImg} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
