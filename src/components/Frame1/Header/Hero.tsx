import React from "react";
import DownloadButtons from "../../DownloadButtons";
import { motion } from "motion/react";
import classes from "../Frame1.module.css";

export default () => {
  return (
    <div
      className={`${classes.frame3} flex-col lg:flex-row items-center self-center`}
    >
      <div
        className={`${classes.frame2} gap-2 lg:gap-28 h-auto lg:h-[550px] pt-36 pb-20`}
      >
        <div className={`${classes.text} px-3 lg:px-0 items-center w-full `}>
          <div
            className={`${classes.simpleAndBeautiful} backdrop-blur-sm text-[40px] leading-10 lg:text-[58px] lg:leading-[70px]`}
          >
            Discover the Joy of Cooking with AI!
          </div>
          <div
            className={`${classes.weHaveCreatedANe} backdrop-blur-sm text-[14px] leading-6 lg:text-[22px] lg:leading-[28px] w-[80%] lg:w-full`}
          >
            TasteCraft brings personalized recipes, step-by-step guidance, and a
            world of flavors to your kitchen. Let AI elevate your culinary
            adventures!
          </div>
        </div>
        <DownloadButtons />
      </div>
      <div className={`${classes.iPhones} scale-[0.8]`}>
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
  );
};
