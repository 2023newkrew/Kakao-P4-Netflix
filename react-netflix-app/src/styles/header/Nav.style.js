import styled from "styled-components";

export const NavContainer = styled.div`
  flex: 0.8;

  ul {
    width: 100%;
    max-width: 700px;
    height: 100%;

    list-style: none;

    display: flex;

    li {
      margin-left: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      color: white;

      font-size: 14px;
    }
  }
`;
