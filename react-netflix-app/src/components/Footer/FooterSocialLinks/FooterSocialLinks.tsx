import React from "react";
import facebookIcon from "../../../assets/facebookIcon.svg";
import instagramIcon from "../../../assets/instagramIcon.svg";
import twitterIcon from "../../../assets/twitterIcon.svg";
import youtubeIcon from "../../../assets/youtubeIcon.svg";
import { SocialLinksContainer } from "./styles";

export default function FooterSocialLinks() {
  return (
    <SocialLinksContainer>
      <a className="footer__social-links__facebook-icon">
        <img src={facebookIcon} />
      </a>
      <a className="footer__social-links__instagram-icon">
        <img src={instagramIcon} />
      </a>
      <a className="footer__social-links__twitter-icon">
        <img src={twitterIcon} />
      </a>
      <a className="footer__social-links__youtube-icon">
        <img src={youtubeIcon} />
      </a>
    </SocialLinksContainer>
  );
}
