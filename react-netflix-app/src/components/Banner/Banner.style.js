import styled from "styled-components";

export const BannerContainer = styled.section`
  position: relative;
  height: 55vw;
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
  bottom: 35%;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 36%;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  z-index: 10;
`;

const EllipsisText = styled.p`
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

// 제목 글자수 따라 가변적이게 해도 좋을듯-> 일단 말줄임 처리
export const ContentTitle = styled(EllipsisText)`
  font-size: 5.2vw;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ContentDesc = styled(EllipsisText)`
  font-size: 1.2vw;
  line-height: normal;
  -webkit-line-clamp: 4;
`;

export const ContentButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6vw;
  margin-top: 30px;
`;

export const ContentButton = styled.button`
  padding: 0.6vw 1.6vw;
  color: ${(props) => (props.color ? props.color : "#fff")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "rgba(109, 109, 110, 0.7)"};
  font-size: 1.4vw;
  border-radius: 4px;
`;
