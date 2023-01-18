import React from "react";
import { NavTabContainer } from "./NavTab.style";

const NavTab = ({ path, tabText }) => {
  return (
    <NavTabContainer>
      <a href={path}>{tabText}</a>
    </NavTabContainer>
  );
};

export default NavTab;
