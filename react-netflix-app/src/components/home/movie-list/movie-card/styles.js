/* eslint-disable import/prefer-default-export */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MovieCardContainer = styled.div`
  flex: 1;
  aspect-ratio: 16 / 9;
  background-color: lightgray;

  ${({ backdropPath }) =>
    backdropPath &&
    css`
      /* TODO: Fetch lower sized images */
      background-image: url(${`${process.env.REACT_APP_IMAGE_API_URL}${backdropPath}`});
      background-size: cover;
    `}
`;
