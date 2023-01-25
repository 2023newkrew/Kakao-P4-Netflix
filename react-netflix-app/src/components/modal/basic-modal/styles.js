import styled from '@emotion/styled';

export const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

export const ModalContainer = styled.div`
  height: 900px;
  width: 900px;
  margin-top: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: scroll;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  background: var(--background-color);
`;

export const CloseButton = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;
