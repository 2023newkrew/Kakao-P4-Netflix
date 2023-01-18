import React from "react";
import { NavTab } from "components";

import { NavTabListContainer } from "./NavTabList.style";

const NavTabList = ({ tabs }) => {
  return (
    <NavTabListContainer>
      {tabs.map((tab) => {
        return <NavTab key={tab.text} path={tab.path} tabText={tab.text} />;
      })}
    </NavTabListContainer>
  );
};

export default NavTabList;
