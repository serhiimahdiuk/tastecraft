import React from "react";
import { Feature } from "../Feature/Feature";
import classes from "../Frame1.module.css";

export default () => {
  return (
    <div id="features" className={`${classes.feature_5} `}>
      <div className={classes.title}>
        <div className={`${classes.createSomethingAwe} backdrop-blur-sm`}>
          Cook Smarter with AI Recipes
        </div>
        <div className={`${classes.weHaveCreatedANe2} backdrop-blur-sm`}>
          Discover easy-to-follow, personalized recipes designed just for you.
          Let TasteCraft be your AI companion in the kitchen, making cooking fun
          and effortless.
        </div>
      </div>
      <div className={classes.frame22}>
        <Feature
          classes={{ photo: classes.photo }}
          text={{
            generateLeadsAndS: (
              <div className={classes.generateLeadsAndS}>
                TasteCraft uses AI to create personalized recipes tailored to
                your taste
              </div>
            ),
            convertBetter: (
              <div className={classes.convertBetter}>Personalized Recipes</div>
            ),
          }}
        />
        <Feature
          classes={{ photo: classes.photo2 }}
          text={{
            generateLeadsAndS: (
              <div className={classes.generateLeadsAndS2}>
                {" "}
                TasteCraft provides clear, step-by-step cooking{" "}
              </div>
            ),
            convertBetter: (
              <div className={classes.convertBetter2}>
                Step-by-Step Cooking{" "}
              </div>
            ),
          }}
        />
        <Feature
          classes={{ photo: classes.photo3 }}
          text={{
            generateLeadsAndS: (
              <div className={classes.generateLeadsAndS3}>
                TasteCraft helps you explore and cook authentic dishes from
                global cuisines.
              </div>
            ),
            convertBetter: (
              <div className={classes.convertBetter3}>
                Explore Global Cuisines
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
};
