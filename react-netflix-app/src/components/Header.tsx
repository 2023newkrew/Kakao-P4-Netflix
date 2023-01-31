import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderContent, LogoLink, PrimaryMenus, SecondaryMenus, MenuItem } from './Header.style';
import { ReactComponent as SearchIcon } from '@icons/search.svg';
import { ReactComponent as AlarmIcon } from '@icons/alarm.svg';
import Logo from '@icons/logo.png';
import throttle from '@utils/throttle';
import SearchInput from '@components/SearchInput';

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

const secondaryMenus = [
  {
    id: 2,
    content: (
      <button>
        <AlarmIcon />
      </button>
    ),
  },
  {
    id: 3,
    content: <button>프로필</button>,
  },
  {
    id: 4,
    content: (
      <Link to="/login" replace>
        로그아웃
      </Link>
    ),
  },
];

const useHeaderStyle = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleHeaderBackground = throttle(() => {
      if (!headerRef.current) {
        return;
      }
      if (window.scrollY > 0) {
        headerRef.current.style.setProperty('background-color', 'rgb(20,20,20)');
      } else {
        headerRef.current.style.setProperty('background-color', 'transparent');
      }
    }, 100);

    window.addEventListener('scroll', handleHeaderBackground);

    return () => {
      window.removeEventListener('scroll', handleHeaderBackground);
    };
  }, []);

  return headerRef;
};

const Header = () => {
  const headerRef = useHeaderStyle();
  const [canSearch, setCanSearch] = useState(false);

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
          {!canSearch && (
            <button
              type="button"
              onClick={() => {
                setCanSearch(true);
              }}
            >
              <SearchIcon />
            </button>
          )}
          {canSearch && <SearchInput setCanSearch={setCanSearch} />}
          {secondaryMenus.map((menu) => (
            <MenuItem key={menu.id}>{menu.content}</MenuItem>
          ))}
        </SecondaryMenus>
      </HeaderContent>
    </HeaderContainer>
  );
};
export default Header;
