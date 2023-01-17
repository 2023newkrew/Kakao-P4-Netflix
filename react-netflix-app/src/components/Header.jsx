import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderContent, LogoLink, PrimaryMenus, SecondaryMenus, MenuItem } from './Header.style';

const primaryMenus = [
  {
    id: 1,
    path: '/',
    label: '홈',
  },
  {
    id: 2,
    path: '/',
    label: '시리즈',
  },
  {
    id: 3,
    path: '/',
    label: '영화',
  },
  {
    id: 4,
    path: '/',
    label: '찜한 콘텐츠',
  },
];

const useHeaderStyle = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    const handleHeaderBackground = () => {
      if (window.scrollY > 0) {
        headerRef.current.style.setProperty('background-color', 'rgb(20,20,20)');
      } else {
        headerRef.current.style.setProperty('background-color', 'transparent');
      }
    };
    window.addEventListener('scroll', handleHeaderBackground);

    return () => {
      window.removeEventListener('scroll', handleHeaderBackground);
    };
  }, []);

  return headerRef;
};

const Header = () => {
  const headerRef = useHeaderStyle();

  return (
    <HeaderContainer>
      <HeaderContent ref={headerRef}>
        <LogoLink aria-label="넷플릭스" to="/">
          NETFLIX
        </LogoLink>
        <PrimaryMenus>
          <MenuItem>
            <span>메뉴</span>
          </MenuItem>
          {primaryMenus.map(({ id, path, label }) => (
            <MenuItem key={id}>
              <Link to={path}>{label}</Link>
            </MenuItem>
          ))}
        </PrimaryMenus>
        <SecondaryMenus>
          <MenuItem>
            <button>검색</button>
          </MenuItem>
          <MenuItem>
            <Link to="/">키즈</Link>
          </MenuItem>
          <MenuItem>
            <button>알림</button>
          </MenuItem>
          <MenuItem>
            <button>프로필</button>
          </MenuItem>
          <MenuItem>
            <Link to="/login" replace>
              로그아웃
            </Link>
          </MenuItem>
        </SecondaryMenus>
      </HeaderContent>
    </HeaderContainer>
  );
};
export default Header;
