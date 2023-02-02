import { LogoContainer } from "@styles/header/Logo.style";

import { useNavigate } from "react-router-dom";

import netflixLogo from "@assets/Netflix_2015_logo.svg";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <LogoContainer onClick={() => navigate("/")}>
      <img src={netflixLogo} alt="넷플릭스 로고 이미지" />
    </LogoContainer>
  );
};

export default Logo;
