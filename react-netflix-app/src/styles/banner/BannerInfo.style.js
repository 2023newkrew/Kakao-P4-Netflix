import styled from "styled-components";

export const BannerInfoContainer = styled.div`
  float: left;
  position: absolute;

  top: 50%;
  left: 2%;

  color: white;
`;

export const BannerInfoButton = styled.div`
  display: flex;
`;

export const BannerInfoTitle = styled.div`
  font-size: 80px;

  font-weight: bold;
  -webkit-text-stroke: 2px black;
`;

export const BannerInfoPlayButton = styled.button`
  width: 150px;
  height: 60px;
  padding: 0 20px;
  border-radius: 7px;
  margin-right: 20px;

  background: white;

  font-size: 30px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const BannerInfoDetailButton = styled.button`
  width: 180px;
  height: 60px;
  padding: 0 10px;
  border-radius: 7px;

  font-size: 30px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: rgba(109, 109, 110, 0.7);
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
