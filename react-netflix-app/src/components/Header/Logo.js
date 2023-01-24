import netflixLogo from "@assets/Netflix_2015_logo.svg";

import { LogoContainer } from "./Logo.style";

const Logo = () => {
  return (
    <LogoContainer>
      <img src={netflixLogo} alt="넷플릭스 로고 이미지" />
    </LogoContainer>
  );
};

export default Logo;
