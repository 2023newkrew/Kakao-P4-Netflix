import styled from "styled-components";

const UnOrderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  color: white;
  font-size: 13px;
  color: gray;
  & > li {
    flex-basis: 25%;
    margin-bottom: 16px;
  }
`;

export { UnOrderedList };
