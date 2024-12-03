import React from "react";
import classes from "../Frame1.module.css";
import DownloadButtons from "../../DownloadButtons";
import { DividerIcon } from "../DividerIcon";

export default () => {
  return (
    <div id="footer" className={`${classes.footer_4} `}>
      <div className={classes.frame1}>
        <div className={classes.copyright}>
          <div className={classes.logo12}></div>
          <div className={classes._2017DesignmodoA}>
            © 2024 Serhii Mahdiuk. All rights reserved.
          </div>
        </div>
        <DownloadButtons />
      </div>
      <div className={classes.divider}>
        <DividerIcon className={classes.icon5} />
      </div>
      <div className={classes.discoverTheJoyOfCookingWithAI}>
        Tastecraft - Discover the Joy of Cooking with AI!
      </div>
    </div>
  );
};
