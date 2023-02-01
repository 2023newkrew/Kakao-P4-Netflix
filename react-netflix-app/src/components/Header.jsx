import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useDebouncedCallback from '@hooks/useDebouncedCallback';
import { ReactComponent as LogoImage } from '@assets/logo.svg';
import { ReactComponent as SearchIcon } from '@assets/search.svg';
import { ReactComponent as NotificationsIcon } from '@assets/notifications.svg';

const HeaderLayout = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;
  background: ${({ isScrolled }) =>
    isScrolled ? 'black' : 'linear-gradient(black, transparent)'};
  z-index: 1;
`;

const Navigation = styled.nav`
  height: 100%;
  margin: 0 48px;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  height: 36px;
  margin-right: 48px;
`;

const MenuList = styled.ul`
  display: flex;
  gap: 16px;
  flex: 1;
`;

const MenuItem = styled.li`
  &:hover {
    opacity: 0.8;
  }
`;

const Button = styled.button`
  width: 36px;
  margin-right: 12px;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const SearchBox = styled.div`
  width: 200px;
  box-sizing: border-box;
  height: 36px;
  margin-right: 12px;
  padding: 4px 8px;
  display: flex;
  gap: 4px;
  background-color: black;
  border: 1px solid white;
`;

const SearchInput = styled.input`
  padding: 0;
  background: none;
  border: none;
  outline: none;
  color: white;
`;

const menus = [
  { path: '/', name: '홈' },
  { path: '/series', name: '시리즈' },
  { path: '/movie', name: '영화' },
  { path: '/latest', name: 'NEW! 요즘 대세 콘텐츠' },
  { path: '/my-list', name: '내가 찜한 콘텐츠' },
  { path: '/by-language', name: '언어별로 찾아보기' },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchBoxOpened, setIsSearchBoxOpened] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSearchBox = () => setIsSearchBoxOpened(true);
  const closeSearchBox = () => setIsSearchBoxOpened(false);

  const search = useDebouncedCallback((query) => {
    if (!query) {
      navigate(location.state?.from || '/');
      return;
    }

    navigate(`/search?q=${query}`, {
      replace: location.pathname === '/search',
      state: {
        from: `${location.pathname}${location.search}`,
      },
    });
  });

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    search(e.target.value);
  };

  return (
    <HeaderLayout isScrolled={isScrolled}>
      <Navigation>
        <Link to="/">
          <Logo>
            <LogoImage />
          </Logo>
        </Link>
        <MenuList>
          {menus.map(({ path, name }) => (
            <MenuItem key={path}>
              <Link to={path}>{name}</Link>
            </MenuItem>
          ))}
        </MenuList>
        {isSearchBoxOpened ? (
          <SearchBox>
            <SearchIcon />
            <SearchInput
              autoFocus
              placeholder="제목, 사람, 장르"
              value={searchQuery}
              onChange={handleSearchInputChange}
              onBlur={closeSearchBox}
            />
          </SearchBox>
        ) : (
          <Button onClick={openSearchBox}>
            <SearchIcon />
          </Button>
        )}
        <Button>
          <NotificationsIcon />
        </Button>
      </Navigation>
    </HeaderLayout>
  );
}
