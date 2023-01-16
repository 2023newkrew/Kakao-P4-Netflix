import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #0e0e0e;
  width: 100%;
  height: 64px;

  transition: background-color 0.3s ease-in-out;

  ${({ isTop }) =>
    isTop &&
    css`
      background-color: transparent;
    `}
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  padding: 0 16px;
`;

export const HeaderLogo = styled.img``;

export const HeaderProfile = styled.img``;
