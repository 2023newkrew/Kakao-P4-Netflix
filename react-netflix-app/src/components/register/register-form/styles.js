import styled from '@emotion/styled';

export const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 350px;
  gap: 16px;
  margin: 64px;
`;

export const RegisterFormLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid var(--divider-color);
`;

export const RegisterFormInput = styled.input`
  width: 200px;
`;

export const RegisterFormButton = styled.button`
  width: 100%;
  border: 1px solid var(--divider-color);
  border-radius: 4px;
  cursor: pointer;
  padding: 16px;
`;
