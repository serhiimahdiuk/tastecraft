import React from "react";
import classes from "../Frame1.module.css";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLink } from "react-router";

export default () => {
  return (
    <div className={`${classes.header_4}`}>
      <div
        className={`${classes.headerMenu} backdrop-blur-sm h-16 bg-[#00000010] w-full`}
      >
        <NavLink to="/" end>
          <div className={classes.logo1}></div>
        </NavLink>
        <div className={`${classes.menu} hidden lg:flex`}>
          <AnchorLink href="#features" className={classes.features}>
            Features
          </AnchorLink>
          <AnchorLink href="#footer" className={classes.downloads}>
            Download
          </AnchorLink>
          <NavLink to="/privacypolicy" end className={classes.docs}>
            Privacy Policy
          </NavLink>
          <AnchorLink href="#faq" className={classes.blog}>
            FAQ
          </AnchorLink>
        </div>
        <div className={`${classes.socials} hidden lg:flex`}>
          {/* <div className={classes.faTwitter}></div>
          <div className={classes.faFacebookSquare}></div>
          <div className={classes.faGooglePlus}></div> */}
        </div>
      </div>
    </div>
  );
};
