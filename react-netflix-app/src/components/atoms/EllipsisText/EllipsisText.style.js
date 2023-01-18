import styled from "styled-components";

export const EllipsisTextContainer = styled.p`
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.line};
  -webkit-box-orient: vertical;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight}; ;
`;
