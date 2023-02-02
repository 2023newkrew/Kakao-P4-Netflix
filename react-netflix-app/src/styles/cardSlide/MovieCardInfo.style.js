import styled from "styled-components";

export const MovieCardInfoContainer = styled.div`
  position: absolute;

  transform: scale(1.2);
  background-color: rgb(24, 24, 24);
  width: 100%;
  height: 20%;
  bottom: 0;
  padding: 10px;

  z-index: 1;

  display: flex;
  flex-direction: column;
  color: white;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const MovieCardInfoButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 10px;

  svg {
    cursor: pointer;
  }
`;

export const MovieCardInfoDetailButton = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
`;

export const MovieCardInfoTitle = styled.div`
  width: 100%;
  height: 20%;

  color: white;
  font-size: 20px;

  margin: 10px 0;
`;

export const MovieCardInfoVoteAverage = styled.div`
  color: #00ff00;
  font-weight: 400;
`;

export const MovieCardInfoCategory = styled.ul`
  margin-top: 10px;
  display: flex;
  list-style: none;
  gap: 20px;
  font-weight: 200;
  font-size: 12px;
  color: white;
`;
