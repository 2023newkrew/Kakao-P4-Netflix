import styled from '@emotion/styled';

export const MyProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;
  padding: 32px;
  border: 1px solid var(--divider-color);
  background-color: var(--background-card-color);

  > * {
    margin: 0;
  }
`;

export const MyProfileTitle = styled.h1``;
export const MyProfileEmail = styled.h2`
  color: var(--secondary-text-color);
`;
export const MyProfileName = styled.h3``;
