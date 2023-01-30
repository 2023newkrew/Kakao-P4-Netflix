import { FooterContainer } from "@styles/footer/footer.style";

import FooterIcon from "./FooterIcon";
import FooterLink from "./FooterLink";
import FooterCopyright from "./FooterCopyright";
import LazyLoad from "react-lazyload";

const Footer = () => {
  return (
    <LazyLoad offset={100}>
      <FooterContainer>
        <FooterIcon />
        <FooterLink />
        <FooterCopyright />
      </FooterContainer>
    </LazyLoad>
  );
};

export default Footer;
