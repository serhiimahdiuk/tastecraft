import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import classes from "./Frame1.module.css";
import Header from "./Header";
import Features from "./Features";
import FAQ from "./FAQ";
import Footer from "./Footer";
import FloatingEmojis from "../FloatingEmojis";

interface Props {
  className?: string;
}

export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div id="page-wrap" className={`${resets.clapyResets} ${classes.root}`}>
      <Header />
      <Features />
      <FAQ />
      <Footer />
      <FloatingEmojis />
    </div>
  );
});
