import styled from "styled-components";

export const IconButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6vw;
  padding: 0.6vw 1.6vw;
  color: ${(props) => props.color};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "rgba(109, 109, 110, 0.5)"};
  font-size: 1.4vw;
  border-radius: 4px;
`;

export const ButtonIcon = styled.img`
  width: 2vw;
  filter: ${(props) => props.invertFilter} !important;
`;

export const ButtonText = styled.div`
  display: block;
  line-height: 2.4vw;
`;
