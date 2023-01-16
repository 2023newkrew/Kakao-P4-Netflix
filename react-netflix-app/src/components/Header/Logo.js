import "@scss/header/logo.scss";
import netflixLogo from "@assets/Netflix_2015_logo.svg";

const Logo = () => {
  return (
    <div className="logo_container">
      <img src={netflixLogo} />
    </div>
  );
};

export default Logo;
