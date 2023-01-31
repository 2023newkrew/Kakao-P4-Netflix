import React from "react";
import styled from "styled-components";

export const NavTabContainer = styled.li`
  margin: 0 10px;
`;

const NavTab = ({ path, tabText }) => {
  return (
    <NavTabContainer>
      <a href={path}>{tabText}</a>
    </NavTabContainer>
  );
};

export default NavTab;
