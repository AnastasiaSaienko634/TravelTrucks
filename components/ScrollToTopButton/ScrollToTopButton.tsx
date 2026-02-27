"use client";
import React, { useEffect, useState } from "react";
import css from "./ScrollToTopButton.module.css";
// Icon arrow up
import { IoArrowUpOutline } from "react-icons/io5";

const ScrollToTopButton = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      setProgress(Math.min(1, scrollTop / max));
      setVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={css.btnScrollTopContainer}>
      <button
        className={css.scrollOnTopBtn}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ opacity: visible ? 1 : 0 }}
      >
        <IoArrowUpOutline className={css.iconArrow} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
