import React from "react";
import { Feature } from "../Feature/Feature";
import classes from "../Frame1.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { isMobile } from "react-device-detect";

const FEATURES = [
  {
    imageStyle: classes.photo,
    title: "Personalized Recipes",
    description:
      "TasteCraft uses AI to create personalized recipes tailored to your taste",
  },
  {
    imageStyle: classes.photo2,
    title: "Step-by-Step Cooking",
    description: "TasteCraft provides clear, step-by-step cooking",
  },
  {
    imageStyle: classes.photo3,
    title: "Explore Global Cuisines",
    description:
      "TasteCraft helps you explore and cook authentic dishes from global cuisines.",
  },
];

export default () => {
  return (
    <div id="features" className={`${classes.feature_5}`}>
      <div className={`${classes.title} px-3 lg:px-0`}>
        <div
          className={`${classes.createSomethingAwe} backdrop-blur-sm text-[40px] leading-10 lg:text-[58px] lg:leading-[70px]`}
        >
          Cook Smarter with AI Recipes
        </div>
        <div
          className={`${classes.weHaveCreatedANe2} backdrop-blur-sm text-[14px] leading-6 lg:text-[22px] lg:leading-[28px]`}
        >
          Discover easy-to-follow, personalized recipes designed just for you.
          Let TasteCraft be your AI companion in the kitchen, making cooking fun
          and effortless.
        </div>
      </div>
      <div className={classes.frame22}>
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            style={{ width: "100vw" }}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
          >
            {FEATURES.map((i) => (
              <SwiperSlide
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Feature
                  classes={{ photo: i.imageStyle }}
                  text={{
                    generateLeadsAndS: (
                      <div className={classes.generateLeadsAndS}>
                        {i.description}
                      </div>
                    ),
                    convertBetter: (
                      <div className={classes.convertBetter}>{i.title}</div>
                    ),
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          FEATURES.map((i) => (
            <Feature
              classes={{ photo: i.imageStyle }}
              text={{
                generateLeadsAndS: (
                  <div className={classes.generateLeadsAndS}>
                    {i.description}
                  </div>
                ),
                convertBetter: (
                  <div className={classes.convertBetter}>{i.title}</div>
                ),
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};
