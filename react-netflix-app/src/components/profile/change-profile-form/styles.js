import styled from '@emotion/styled';

export const ChangeProfileFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 1px solid var(--divider-color);
  background-color: var(--background-card-color);
  margin: 0 auto;
  padding: 32px;
  gap: 16px;
`;

export const ChangeProfileLabel = styled.label`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChangeProfileInput = styled.input``;

export const ChangeProfileButton = styled.button`
  height: 48px;
  background-color: white;
  border: 1px solid var(--divider-color);
  border-radius: 8px;
  cursor: pointer;
`;
