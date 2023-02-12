import styled from "styled-components";

export const ContentListContainer = styled.li`
  padding: 20px 0;
  z-index: 5;
`;

export const ContentGridWrapper = styled.ul`
  display: grid;
  row-gap: 2vw;
  grid-template-columns: repeat(${(props) => props.cardsPerGroup}, 1fr);
  padding: 10px 0px;
`;
