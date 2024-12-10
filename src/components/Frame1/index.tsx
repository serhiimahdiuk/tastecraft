import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import classes from "./Frame1.module.css";
import Header from "./Header";
import Features from "./Features";
import FAQ from "./FAQ";
import Footer from "./Footer";
import FloatingEmojis from "../FloatingEmojis";
import { Route, Routes } from "react-router";
import Hero from "./Header/Hero";
import PrivacyPolicy from "../PrivacyPolicy";

interface Props {
  className?: string;
}

export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div id="page-wrap" className={`${resets.clapyResets} ${classes.root}`}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <FAQ />
            </>
          }
        />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <FloatingEmojis />
    </div>
  );
});
