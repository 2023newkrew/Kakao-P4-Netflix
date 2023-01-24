import styled from "styled-components";

export const MovieCardSubInfoContainer = styled.div`
  margin-top: 40px;
  width: 40%;
  height: 100%;
  line-height: 250%;
  font-weight: 200;
`;

export const MovieCardInfoContainer = styled.div`
  width: 90%;
  padding-left: 5px;
`;

export const MovieCardTitle = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 20%;
  font-size: 30px;

  display: flex;
  align-items: center;
  font-weight: 350;
`;

export const MovieCardSubTitle = styled.div`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 200;
`;

export const MovieCardOverviewWrapper = styled.div`
  display: flex;
  gap: 80px;
`;

export const MovieCardOverview = styled.div`
  height: 100%;
  width: 100%;
  line-height: 150%;
  font-size: 14px;
  font-weight: 100;
`;

export const MovieModalContainer = styled.div`
  width: 100%;
  height: 100%;

  iframe {
    width: 100%;
    height: 600px;
    position: relative;
  }
`;

export const ModalMovieCard = styled.div`
  width: 100%;
  height: 30%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  background: linear-gradient(0deg, rgb(21, 21, 21), 99%, transparent);
  color: white;

  position: absolute;
  top: 590px;

  display: flex;
`;
