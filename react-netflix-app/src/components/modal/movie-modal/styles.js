import styled from '@emotion/styled';

export const MovieBackdrop = styled.img`
  width: 100%;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  margin: 16px;
  flex-direction: column;
  align-items: flex-start;
`;

export const ModalSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ModalPlayButton = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: white;
  padding: 16px 48px;
  font-size: 1rem;
  font-weight: bold;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
`;

export const ModalTitle = styled.h1``;

export const ModalOverview = styled.p``;
