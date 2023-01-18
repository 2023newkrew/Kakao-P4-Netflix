import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import Profile from "./Profile";

import "@scss/header/Header.scss";

const Header = () => {
  return (
    <div className="header_container">
      <Logo />
      <Nav />
      <Search />
      <Profile />
    </div>
  );
};

export default Header;
