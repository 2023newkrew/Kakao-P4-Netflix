import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 800px;
  background-color: var(--background-color);

  ${({ backdropPath }) =>
    backdropPath &&
    css`
      background-image: url(${`${process.env.REACT_APP_IMAGE_API_URL}${backdropPath}`});
      background-size: cover;
    `};
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
`;

export const HeroTitle = styled.h1``;
