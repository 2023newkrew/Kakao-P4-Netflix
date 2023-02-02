import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderContent,
  LogoLink,
  PrimaryMenus,
  SecondaryMenus,
  MenuItem,
  Profile,
  ProfileThumbnail,
  ProfileMenuContainer,
  ProfileMenu,
  ProfileMenuItem,
  LogoutButton,
} from './Header.style';
import { ReactComponent as SearchIcon } from '@icons/search.svg';
import { ReactComponent as AlarmIcon } from '@icons/alarm.svg';
import Logo from '@icons/logo.png';
import defaultProfile from '@icons/netflix_profile.png';
import throttle from '@utils/throttle';
import SearchInput from '@components/SearchInput';
import useUser from '@hooks/useUser';
import useAuth from '@hooks/useAuth';

const primaryMenus = [
  {
    id: 1,
    path: '/browse',
    label: '홈',
  },
  {
    id: 2,
    path: '/browse',
    label: '시리즈',
  },
  {
    id: 3,
    path: '/browse',
    label: '영화',
  },
  {
    id: 4,
    path: '/browse',
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
  const profileImgRef = useRef<HTMLImageElement>(null);
  const headerRef = useHeaderStyle();
  const [canSearch, setCanSearch] = useState(false);
  const { isLoggedIn, userData } = useUser();
  const { handleSignOut } = useAuth();

  return (
    <HeaderContainer>
      <HeaderContent ref={headerRef}>
        <LogoLink aria-label="넷플릭스" to="/browse">
          <img src={Logo} alt="넷플릭스 로고" height="24" width="88" />
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
          {isLoggedIn && (
            <Profile>
              {userData?.photoURL && (
                <ProfileThumbnail
                  ref={profileImgRef}
                  src={'userData.photoURL'}
                  alt="프로필 사진"
                  width="36"
                  onError={() => {
                    if (!profileImgRef.current) {
                      return;
                    }
                    profileImgRef.current.src = defaultProfile;
                  }}
                />
              )}
              <ProfileMenuContainer>
                <ProfileMenu>
                  <ProfileMenuItem>
                    <Link to="/browse">프로필 관리</Link>
                  </ProfileMenuItem>
                  <ProfileMenuItem>
                    <Link to="/browse">프로필 이전</Link>
                  </ProfileMenuItem>
                  <ProfileMenuItem>
                    <Link to="/browse">프로필 계정</Link>
                  </ProfileMenuItem>
                  <ProfileMenuItem>
                    <Link to="/browse">고객 센터</Link>
                  </ProfileMenuItem>
                </ProfileMenu>
                <LogoutButton onClick={handleSignOut}>로그아웃</LogoutButton>
              </ProfileMenuContainer>
            </Profile>
          )}
        </SecondaryMenus>
      </HeaderContent>
    </HeaderContainer>
  );
};
export default Header;
