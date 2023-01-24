import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import Profile from "./Profile";

import { HeaderContainer } from "./Header.style";

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
