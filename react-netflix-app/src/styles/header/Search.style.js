import styled from "styled-components";

export const SearchContainer = styled.div`
  height: 100%;
  flex: 0.15;

  min-width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  input {
    flex: 0.8;
    height: 50%;
    border: 0px;
    color: white;
    border-radius: 20px;
    background-color: #141414;
    opacity: 0.8;
    padding: 10px;
  }
`;

export const InputImage = styled.div`
  flex: 0.1;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  img {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;
