import React from "react";
import { AppStore_TypeDefault } from "./AppStore_TypeDefault/AppStore_TypeDefault";
import { GroupIcon } from "./GroupIcon";
import { GooglePlay_TypeDefault } from "./GooglePlay_TypeDefault/GooglePlay_TypeDefault";
import { GroupIcon2 } from "./GroupIcon2";
import classes from "../Frame1/Frame1.module.css";

export default () => {
  return (
    <div className={`${classes.download} scale-[0.7] lg:scale-[1]`}>
      <a
        href="https://apps.apple.com/ua/app/tastecraft/id6737696753"
        target="_blank"
      >
        <AppStore_TypeDefault
          className={classes.appStore}
          classes={{ group: classes.group }}
          swap={{
            group: (
              <div className={classes.group}>
                <GroupIcon className={classes.icon} />
              </div>
            ),
          }}
        />
      </a>
      <GooglePlay_TypeDefault
        className={classes.googlePlay}
        classes={{ group: classes.group2 }}
        swap={{
          group: (
            <div className={classes.group2}>
              <GroupIcon2 className={classes.icon2} />
            </div>
          ),
        }}
      />
    </div>
  );
};
