/* eslint-disable import/prefer-default-export */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IMAGE_URL_MAP } from '@/configs/image';

export const MovieCardContainer = styled.div`
  flex: 1;
  aspect-ratio: 16 / 9;
  position: relative;

  &:hover {
    transition: 0.5s transform;
    transform: scale(1.2);
    z-index: 10;
    cursor: pointer;
  }

  ${({ backdropPath }) =>
    backdropPath &&
    css`
      background-image: url(${`${IMAGE_URL_MAP.W_300}${backdropPath}`});
      background-size: cover;
    `}
`;
