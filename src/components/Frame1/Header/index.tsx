import React from "react";
import classes from "../Frame1.module.css";
import DownloadButtons from "../../DownloadButtons";

export default () => {
  return (
    <div className={classes.header_4}>
      <div className={classes.headerMenu}>
        <div className={classes.logo1}></div>
        <div className={classes.menu}>
          <div className={classes.features}>Features</div>
          <div className={classes.downloads}>Downloads</div>
          <div className={classes.docs}>Privacy Policy</div>
          <div className={classes.blog}>FAQ</div>
        </div>
        <div className={classes.socials}>
          <div className={classes.faTwitter}></div>
          <div className={classes.faFacebookSquare}></div>
          <div className={classes.faGooglePlus}></div>
        </div>
      </div>
      <div className={classes.frame3}>
        <div className={classes.frame2}>
          <div className={classes.text}>
            <div className={classes.simpleAndBeautiful}>
              Discover the Joy of Cooking with AI!
            </div>
            <div className={classes.weHaveCreatedANe}>
              TasteCraft brings personalized recipes, step-by-step guidance, and
              a world of flavors to your kitchen. Let AI elevate your culinary
              adventures!
            </div>
          </div>
          <DownloadButtons />
        </div>
        <div className={classes.iPhones}>
          <div className={classes.shadow}></div>
          <div className={classes.hero2}></div>
          <div className={classes.shadow2}></div>
          <div className={classes.hero1}></div>
        </div>
      </div>
    </div>
  );
};
