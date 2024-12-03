import React from "react";
import classes from "../Frame1.module.css";

const questions = [
  {
    question: "Can I use TasteCraft for free?",
    answer:
      "Yes, TasteCraft offers a Free version that provides access to all core features, but it includes ads and a banner. You can make one request every 3 hours, but each request requires viewing an ad.",
  },
  {
    question: "How does personalized recipe suggestion work?",
    answer:
      "TasteCraft uses AI to analyze your preferences, available ingredients, and dietary needs to create personalized recipes just for you.",
  },
  {
    question: "What benefits do I get with a Premium subscription?",
    answer:
      "With a Premium subscription, you get unlimited access to all features, no ads, and a free one-week trial. You can make as many requests as you want without any wait time.",
  },
  {
    question: "I am experiencing technical issues. What should I do?",
    answer:
      "If you encounter any technical issues, visit the support section in the app or email us at [tastecraft.info@gmail.com].",
  },
  {
    question: "How can I delete my account?",
    answer:
      "If you wish to delete your account, go to account settings in the app or contact our support team.",
  },
  {
    question: "Does TasteCraft collect my data?",
    answer:
      "TasteCraft collects only the necessary information to provide the best user experience, such as your preferences for personalized recipes. All data is stored securely and not shared with third parties without your consent.",
  },
];

export default () => {
  return (
    <div
      id="faq"
      className={`${classes.content_19} backdrop-blur-sm py-6 lg:py-12 items-center`}
    >
      <div className={`${classes.yourQuestionsAnswe}`}>
        Your questions answered
      </div>
      <div
        className={`${classes.questions} flex flex-row flex-wrap item-center px-8 lg:px-36 `}
      >
        {questions.map((q, i) => (
          <div
            className={`flex flex-col w-full lg:w-1/2 lg:px-20 py-10`}
            key={i}
          >
            <div className={`${classes.doYouProvideSuppo} pb-2`}>
              {q.question}
            </div>
            <div className={classes.yesWeArePlease}>{q.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
