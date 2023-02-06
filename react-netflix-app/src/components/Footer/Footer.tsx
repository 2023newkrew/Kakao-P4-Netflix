import React from "react";
import FooterCopyRight from "./FooterCopyRight/FooterCopyRight";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterService from "./FooterService/FooterService";
import FooterSocialLinks from "./FooterSocialLinks/FooterSocialLinks";
import { FooterContainer } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSocialLinks />
      <FooterLinks />
      <FooterService />
      <FooterCopyRight />
    </FooterContainer>
  );
}
