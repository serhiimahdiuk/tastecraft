import React from "react";
import classes from "../Frame1.module.css";
import DownloadButtons from "../../DownloadButtons";
import { motion } from "motion/react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default () => {
  return (
    <div className={`${classes.header_4}`}>
      <div className={`${classes.headerMenu} backdrop-blur-sm`}>
        <div className={classes.logo1}></div>
        <div className={classes.menu}>
          <AnchorLink href="#features" className={classes.features}>
            Features
          </AnchorLink>
          <AnchorLink href="#footer" className={classes.downloads}>
            Download
          </AnchorLink>
          <a
            target="_blank"
            href="https://www.privacypolicies.com/live/7aba03db-4a6e-44ac-9d39-ad49458c0e88"
            className={classes.docs}
          >
            Privacy Policy
          </a>
          <AnchorLink href="#faq" className={classes.blog}>
            FAQ
          </AnchorLink>
        </div>
        <div className={classes.socials}>
          {/* <div className={classes.faTwitter}></div>
          <div className={classes.faFacebookSquare}></div>
          <div className={classes.faGooglePlus}></div> */}
        </div>
      </div>
      <div className={classes.frame3}>
        <div className={classes.frame2}>
          <div className={classes.text}>
            <div className={`${classes.simpleAndBeautiful} backdrop-blur-sm`}>
              Discover the Joy of Cooking with AI!
            </div>
            <div className={`${classes.weHaveCreatedANe} backdrop-blur-sm`}>
              TasteCraft brings personalized recipes, step-by-step guidance, and
              a world of flavors to your kitchen. Let AI elevate your culinary
              adventures!
            </div>
          </div>
          <DownloadButtons />
        </div>
        <div className={classes.iPhones}>
          <motion.div
            className={classes.shadow}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 5 }}
          />
          <motion.div
            className={classes.hero2}
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />

          <motion.div
            className={classes.shadow2}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
          />
          <motion.div
            className={classes.hero1}
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              delay: 1,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};
