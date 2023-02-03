import styled from "styled-components";

export const MovieListContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;

  padding: 100px 30px 0 30px;

  margin-bottom: 50px;

  overflow: auto;
  display: grid;

  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;
