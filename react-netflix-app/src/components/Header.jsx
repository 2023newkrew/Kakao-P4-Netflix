import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderContent, LogoLink, PrimaryMenus, SecondaryMenus, MenuItem } from './Header.style';
import SearchIcon from '../assets/icons/search.svg';
import AlarmIcon from '../assets/icons/alarm.svg';
import Logo from '../assets/icons/logo.png';

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
          <img src={Logo} alt="넷플릭스 로고" />
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
            <button>
              <img src={SearchIcon} alt="검색 아이콘" />
            </button>
          </MenuItem>
          <MenuItem>
            <button>
              <img src={AlarmIcon} alt="알람 아이콘" />
            </button>
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
