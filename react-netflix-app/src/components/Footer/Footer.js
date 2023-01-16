import React from "react";
import FooterCopyRight from "./FooterCopyRight/FooterCopyRight";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterService from "./FooterService/FooterService";
import FooterSocialLinks from "./FooterSocialLinks/FooterSocialLinks";
import styles from "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <FooterSocialLinks />
      <FooterLinks />
      <FooterService />
      <FooterCopyRight />
    </div>
  );
}
