import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* backdrop-filter: blur(5px); */
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContentWrapper = styled.div`
  position: absolute;
  top: 5%;
  border-radius: 10px;
  background-color: #141414;
  width: 50vw;

  /* @media (max-width: 1120px) {
    width: 50vw;
  } */

  min-height: 90%;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
