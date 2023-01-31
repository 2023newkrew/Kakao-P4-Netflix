import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavTabContainer = styled.li`
  margin: 0 10px;
`;

const NavTab = ({ path, tabText }) => {
  return (
    <NavTabContainer>
      <Link to={path}>{tabText}</Link>
    </NavTabContainer>
  );
};

export default NavTab;
