import styled from "styled-components";

const MainColumnItemCotainer = styled.div`
  width: calc(100% / ${(props) => props.separateCount});
  padding-left: 0.2vw;
  padding-right: 0.2vw;
  object-fit: fill;
  display: flex;
`;

const MainColumnItemImg = styled.img`
  width: 100%;
  height: 100%;
`;

export { MainColumnItemCotainer, MainColumnItemImg };
