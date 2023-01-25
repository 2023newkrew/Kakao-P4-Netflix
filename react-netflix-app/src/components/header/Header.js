import { HeaderContainer } from "@styles/header/Header.style";

import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import Profile from "./Profile";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
      <Search />
      <Profile />
    </HeaderContainer>
  );
};

export default Header;
