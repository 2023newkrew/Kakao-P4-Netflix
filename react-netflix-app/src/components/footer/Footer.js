import { FooterContainer } from "@styles/footer/footer.style";

import FooterIcon from "./FooterIcon";
import FooterLink from "./FooterLink";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIcon />
      <FooterLink />
      <FooterCopyright />
    </FooterContainer>
  );
};

export default Footer;
