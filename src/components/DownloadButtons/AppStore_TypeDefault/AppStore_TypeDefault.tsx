import { memo } from "react";
import type { FC, ReactNode } from "react";

import resets from "../../_resets.module.css";
import classes from "./AppStore_TypeDefault.module.css";
import { GroupIcon } from "./GroupIcon.js";

interface Props {
  className?: string;
  classes?: {
    group?: string;
    root?: string;
  };
  swap?: {
    group?: ReactNode;
  };
}
/* @figmaId 5867:257 */
export const AppStore_TypeDefault: FC<Props> = memo(
  function AppStore_TypeDefault(props = {}) {
    return (
      <div
        className={`${resets.clapyResets} ${props.classes?.root || ""} ${
          props.className || ""
        } ${classes.root}`}
      >
        <div className={`${props.classes?.group || ""} ${classes.group}`}>
          {props.swap?.group || <GroupIcon className={classes.icon} />}
        </div>
      </div>
    );
  }
);
