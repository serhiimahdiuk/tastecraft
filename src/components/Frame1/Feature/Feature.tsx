import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Feature.module.css';

interface Props {
  className?: string;
  classes?: {
    photo?: string;
  };
  text?: {
    generateLeadsAndS?: ReactNode;
    convertBetter?: ReactNode;
  };
}
/* @figmaId 170:11 */
export const Feature: FC<Props> = memo(function Feature(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.placeholder}></div>
      {props.text?.generateLeadsAndS != null ? (
        props.text?.generateLeadsAndS
      ) : (
        <div className={classes.generateLeadsAndS}>
          Generate leads and sales with our effective call-to-action blocks from buttons to testimonials to forms.
        </div>
      )}
      {props.text?.convertBetter != null ? (
        props.text?.convertBetter
      ) : (
        <div className={classes.convertBetter}>Convert Better</div>
      )}
      <div className={`${props.classes?.photo || ''} ${classes.photo}`}></div>
    </div>
  );
});
