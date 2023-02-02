import styled from "styled-components";

export const SearchBarContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid hsla(0, 0%, 100%, 0.85);
  display: flex;
  margin: 0 10px;
`;

export const SearchBarIcon = styled.img`
  padding: 0 6px;
`;

export const SearchBarInput = styled.input`
  background: transparent;
  border: none;
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  outline: none;
  padding: 7px 14px 7px 7px;
  width: 212px;
  height: 34px;
  line-height: 34px;
`;
