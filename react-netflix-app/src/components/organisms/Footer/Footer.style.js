import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4vw 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5vw;
`;

export const MenuWrapper = styled.ul`
  display: grid;
  column-gap: 5vw;
  row-gap: 2vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  padding: 2vw;
  color: gray;
`;
