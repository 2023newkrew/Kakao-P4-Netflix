import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56.25vw;
  color: white;
  background-color: var(--background-color);

  ${({ backdropPath }) =>
    backdropPath &&
    css`
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
        url(${`${process.env.REACT_APP_IMAGE_API_URL}${backdropPath}`});
      background-size: cover;
    `};
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  margin-left: 32px;
`;

export const HeroOverview = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const HeroTitle = styled.h1``;
