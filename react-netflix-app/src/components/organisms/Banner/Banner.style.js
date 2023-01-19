import styled from "styled-components";

export const BannerContainer = styled.section`
  position: relative;
  height: 40vw;
`;

export const BannerBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 55vw;
  background-color: #888;
  z-index: -1;
  overflow: hidden;

  & > img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  bottom: -1px;
  height: 14.7vw;
  width: 100%;
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 10%;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 36%;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  z-index: 10;
`;

export const ContentTitle = styled.div`
  margin-bottom: 2vw;
`;

export const ContentDesc = styled.div`
  margin-bottom: 2.5vw;
`;

export const ContentButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6vw;
`;
