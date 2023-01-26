import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoImage } from '@assets/logo.svg';
import { ReactComponent as SearchIcon } from '@assets/search.svg';
import { ReactComponent as NotificationsIcon } from '@assets/notifications.svg';

const HeaderLayout = styled.header`
  position: fixed;
  width: 100%;
  height: 72px;
  background: linear-gradient(black, transparent);
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

const MenuItem = styled.li``;

const Button = styled.button`
  width: 36px;
  margin-right: 12px;
  border: none;
  background: none;
  cursor: pointer;
`;

const menus = [
  { path: '/hot', name: '홈' },
  { path: '/series', name: '시리즈' },
  { path: '/movie', name: '영화' },
  { path: '/latest', name: 'NEW! 요즘 대세 콘텐츠' },
  { path: '/my-list', name: '내가 찜한 콘텐츠' },
  { path: '/by-language', name: '언어별로 찾아보기' },
];

export default function Header() {
  return (
    <HeaderLayout>
      <Navigation>
        <Logo>
          <LogoImage />
        </Logo>
        <MenuList>
          {menus.map(({ path, name }) => (
            <MenuItem key={path}>{name}</MenuItem>
          ))}
        </MenuList>
        <Button>
          <SearchIcon />
        </Button>
        <Button>
          <NotificationsIcon />
        </Button>
      </Navigation>
    </HeaderLayout>
  );
}
