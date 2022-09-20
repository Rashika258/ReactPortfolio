import React, { Fragment } from "react";
import { BsLinkedin, BsGithub, BsYoutube, BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <Fragment>
      {/* tag rel with "noopener" and "noreferrer" combined means that no referrer
      information should be passed to the website being linked to because of
      noreferrer tag and also prevents the newly opened page from controlling
      the page that delivered the traffic. rel="noreferrer" attribute has the
      same effect as the rel="noopener" attribute, and it will also prevent the
      referrer header from being sent to the new page. */}
      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/rashika-suresh/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Rashika258/"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.youtube.com/channel/UCoWakCOS0SppEJ1ryyCE5Ig"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube />
        </a>

        <a
          href="https://twitter.com/i/flow/login"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
    </Fragment>
  );
};

export default HeaderSocials;
