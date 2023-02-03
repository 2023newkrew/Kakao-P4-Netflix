import facebook from "@assets/facebook.svg";
import instagram from "@assets/instagram.svg";
import twitter from "@assets/twitter.svg";
import youtube from "@assets/youtube.svg";

import { FooterIconContainer } from "@styles/footer/footerIcon.style";

const FooterIcon = () => {
  return (
    <FooterIconContainer>
      <img src={facebook} alt="facebook icon" />
      <img src={instagram} alt="instagram icon" />
      <img src={twitter} alt="twitter icon" />
      <img src={youtube} alt="youtube icon" />
    </FooterIconContainer>
  );
};

export default FooterIcon;
