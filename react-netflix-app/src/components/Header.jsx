import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

export default function Header({ menus }) {
  return (
    <HeaderLayout>
      <Navigation>
        <Logo>
          <LogoImage />
        </Logo>
        <MenuList>
          {menus.map(({ id, name }) => (
            <MenuItem key={id}>{name}</MenuItem>
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

Header.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
