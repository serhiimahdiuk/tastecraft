import React from "react";
import classes from "../Frame1.module.css";
import DownloadButtons from "../../DownloadButtons";
import { DividerIcon } from "../DividerIcon";

export default () => {
  return (
    <div id="footer" className={`${classes.footer_4} `}>
      <div className={`${classes.frame1} w-full flex-col lg:flex-row`}>
        <div className={`${classes.copyright} flex-col lg:flex-row`}>
          <div className={classes.logo12}></div>
          <div className={classes._2017DesignmodoA}>
            © 2024 Serhii Mahdiuk. All rights reserved.
          </div>
        </div>
        <DownloadButtons />
      </div>
      <div className={`${classes.divider} w-full`}>
        <DividerIcon className={classes.icon5} />
      </div>
      <div className={classes.discoverTheJoyOfCookingWithAI}>
        Tastecraft - Discover the Joy of Cooking with AI!
      </div>
      <a
        target="_blank"
        href="https://www.privacypolicies.com/live/7aba03db-4a6e-44ac-9d39-ad49458c0e88"
        className={classes.docs}
      >
        Privacy Policy
      </a>
    </div>
  );
};
