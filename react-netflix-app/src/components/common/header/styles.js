import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background: var(--background-color);
  width: 100%;
  height: 64px;
  z-index: 100;

  transition: background-color 0.3s ease-in-out;

  ${({ isTop }) =>
    isTop &&
    css`
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
    `}
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  padding: 0 16px;
`;

export const HeaderRightContent = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  cursor: pointer;
`;

export const HeaderProfile = styled.img``;

export const HeaderUsername = styled.span`
  font-size: 16px;
`;
