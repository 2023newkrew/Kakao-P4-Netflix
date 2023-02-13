import styled from '@emotion/styled';

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 350px;
  margin: 64px;
  gap: 16px;
`;

export const LoginFormLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid var(--divider-color);
`;

export const LoginFormInput = styled.input`
  width: 200px;
`;

export const LoginFormButton = styled.button`
  width: 100%;
  padding: 16px;
  border: 1px solid var(--divider-color);
  border-radius: 4px;
  cursor: pointer;
`;
