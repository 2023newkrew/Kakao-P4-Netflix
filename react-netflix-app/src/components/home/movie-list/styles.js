import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const MoviePrevButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  border: none;
  width: 50px;
  height: 100%;
  background: linear-gradient(270deg, transparent, rgba(0, 0, 0, 0.7));
  cursor: pointer;

  :hover {
    background: linear-gradient(270deg, transparent, rgba(255, 255, 255, 0.5));
  }

  ${({ disabled }) =>
    disabled &&
    css`
      display: none;
    `}
`;

export const MovieNextButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  width: 50px;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5));
  cursor: pointer;

  :hover {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5));
  }

  ${({ disabled }) =>
    disabled &&
    css`
      display: none;
    `}
`;

export const MovieListContainer = styled.article``;

export const MovieItemContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const MovieItemContent = styled.div`
  width: 100%;
  display: flex;
  transition: all 0.5s ease-in-out;
`;

export const MovieCardInner = styled.div`
  min-width: 100%;
  display: flex;
  gap: 16px;
  flex-wrap: nowrap;
  width: 100%;
`;

export const MovieListTitle = styled.h2`
  margin-left: 16px;
`;
