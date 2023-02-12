import styled from "styled-components";

export const ContentDetailContainer = styled.section`
  position: relative;
  width: 100%;
  height: 40vw;
`;

export const ContentDetailBackground = styled.div`
  width: 100%;
  height: 30vw;
  z-index: -1;
  overflow: hidden;
  border-radius: 10px;

  & > img {
    position: absolute;
    width: 100%;
    max-height: 30vw;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
`;

export const BackgroundFooter = styled.div`
  position: absolute;
  background-color: transparent;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 8%, 0) 0,
    hsla(0, 0%, 8%, 0.15) 15%,
    hsla(0, 0%, 8%, 0.35) 29%,
    hsla(0, 0%, 8%, 0.58) 44%,
    #141414 68%,
    #141414
  );
  bottom: 25%;
  height: 14vw;
  width: 100%;
`;

export const ContentDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 3vw 3vw;
  width: 85%;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  z-index: 10;
`;

export const ContentTitle = styled.div`
  margin-bottom: 2vw;
  font-size: 5vw;
`;

export const ContentDesc = styled.div`
  margin-bottom: 2.5vw;
`;

export const ContentButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6vw;
`;
