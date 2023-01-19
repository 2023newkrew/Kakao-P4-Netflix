import styled from "styled-components";

export const ContentListContainer = styled.li`
  padding: 20px 30px;
  z-index: 5;
`;

export const ContentListWrapper = styled.ul`
  display: flex;
  gap: 5px;
  padding: 10px 0;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentListTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;
