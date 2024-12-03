import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AppStore_TypeDefault } from './AppStore_TypeDefault/AppStore_TypeDefault.js';
import { DividerIcon } from './DividerIcon.js';
import { Feature } from './Feature/Feature.js';
import classes from './Frame1.module.css';
import { GooglePlay_TypeDefault } from './GooglePlay_TypeDefault/GooglePlay_TypeDefault.js';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon3 } from './GroupIcon3.js';
import { GroupIcon4 } from './GroupIcon4.js';
import { GroupIcon } from './GroupIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 5845:46 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
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
              <div className={classes.simpleAndBeautiful}>Discover the Joy of Cooking with AI!</div>
              <div className={classes.weHaveCreatedANe}>
                TasteCraft brings personalized recipes, step-by-step guidance, and a world of flavors to your kitchen.
                Let AI elevate your culinary adventures!
              </div>
            </div>
            <div className={classes.download}>
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
          </div>
          <div className={classes.iPhones}>
            <div className={classes.shadow}></div>
            <div className={classes.hero2}></div>
            <div className={classes.shadow2}></div>
            <div className={classes.hero1}></div>
          </div>
        </div>
      </div>
      <div className={classes.feature_5}>
        <div className={classes.title}>
          <div className={classes.createSomethingAwe}>Cook Smarter with AI Recipes</div>
          <div className={classes.weHaveCreatedANe2}>
            Discover easy-to-follow, personalized recipes designed just for you. Let TasteCraft be your AI companion in
            the kitchen, making cooking fun and effortless.
          </div>
        </div>
        <div className={classes.frame22}>
          <Feature
            classes={{ photo: classes.photo }}
            text={{
              generateLeadsAndS: (
                <div className={classes.generateLeadsAndS}>
                  TasteCraft uses AI to create personalized recipes tailored to your taste
                </div>
              ),
              convertBetter: <div className={classes.convertBetter}>Personalized Recipes</div>,
            }}
          />
          <Feature
            classes={{ photo: classes.photo2 }}
            text={{
              generateLeadsAndS: (
                <div className={classes.generateLeadsAndS2}> TasteCraft provides clear, step-by-step cooking </div>
              ),
              convertBetter: <div className={classes.convertBetter2}>Step-by-Step Cooking </div>,
            }}
          />
          <Feature
            classes={{ photo: classes.photo3 }}
            text={{
              generateLeadsAndS: (
                <div className={classes.generateLeadsAndS3}>
                  TasteCraft helps you explore and cook authentic dishes from global cuisines.
                </div>
              ),
              convertBetter: <div className={classes.convertBetter3}>Explore Global Cuisines</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.content_19}>
        <div className={classes.paragraph}>
          <div className={classes.yourQuestionsAnswe}>Your questions answered</div>
        </div>
        <div className={classes.questions}>
          <div className={classes.yesWeArePlease}>
            Answer: If you encounter any technical issues, visit the support section in the app or email us at
            [tastecraft.info@gmail.com].
          </div>
          <div className={classes.doYouProvideSuppo}>I am experiencing technical issues. What should I do?</div>
          <div className={classes.theGeneratorAppIs}>
            If you wish to delete your account, go to account settings in the app or contact our support team.
          </div>
          <div className={classes.howStartupFramewor}>How can I delete my account?</div>
          <div className={classes.weAreHereIsThe}>
            TasteCraft collects only the necessary information to provide the best user experience, such as your
            preferences for personalized recipes. All data is stored securely and not shared with third parties without
            your consent.
          </div>
          <div className={classes.areYouPlanningTo}>Does TasteCraft collect my data?</div>
          <div className={classes.youReBuyingAnAcc}>
            With a Premium subscription, you get unlimited access to all features, no ads, and a free one-week trial.
            You can make as many requests as you want without any wait time.
          </div>
          <div className={classes.whatExactlyAmIBu}>What benefits do I get with a Premium subscription?</div>
          <div className={classes.noHostingIsOnYo}>
            TasteCraft uses AI to analyze your preferences, available ingredients, and dietary needs to create
            personalized recipes just for you.
          </div>
          <div className={classes.doYouProvideHosti}>How does personalized recipe suggestion work?</div>
          <div className={classes.theGeneratorAppIs2}>
            {' '}
            Yes, TasteCraft offers a Free version that provides access to all core features, but it includes ads and a
            banner. You can make one request every 3 hours, but each request requires viewing an ad.
          </div>
          <div className={classes.howStartupFramewor2}>Can I use TasteCraft for free?</div>
        </div>
      </div>
      <div className={classes.footer_4}>
        <div className={classes.frame1}>
          <div className={classes.copyright}>
            <div className={classes.logo12}></div>
            <div className={classes._2017DesignmodoA}>© 2024 Serhii Mahdiuk. All rights reserved.</div>
          </div>
          <div className={classes.download2}>
            <AppStore_TypeDefault
              className={classes.appStore2}
              classes={{ group: classes.group3 }}
              swap={{
                group: (
                  <div className={classes.group3}>
                    <GroupIcon3 className={classes.icon3} />
                  </div>
                ),
              }}
            />
            <GooglePlay_TypeDefault
              className={classes.googlePlay2}
              classes={{ group: classes.group4 }}
              swap={{
                group: (
                  <div className={classes.group4}>
                    <GroupIcon4 className={classes.icon4} />
                  </div>
                ),
              }}
            />
          </div>
        </div>
        <div className={classes.divider}>
          <DividerIcon className={classes.icon5} />
        </div>
        <div className={classes.discoverTheJoyOfCookingWithAI}>Tastecraft - Discover the Joy of Cooking with AI!</div>
      </div>
    </div>
  );
});
