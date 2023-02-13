import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SEARCH_GRID_ITEM_WIDTH } from '@/constants/search';

export const SearchGridItemImage = styled.img`
  width: ${SEARCH_GRID_ITEM_WIDTH}px;
`;

export const SearchGridItemContainer = styled.div`
  background-color: white;
  color: black;
  width: ${SEARCH_GRID_ITEM_WIDTH}px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  ${({ hasPosterImage }) =>
    hasPosterImage &&
    css`
      background-color: transparent;
      align-items: flex-start;
    `};
`;

export const SearchGridItemTitle = styled.h2``;
