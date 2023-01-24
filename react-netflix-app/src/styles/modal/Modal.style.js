import styled from "styled-components";

export const ModalContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 45%;
  height: 100%;
`;
