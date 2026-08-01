import React, { useState, useEffect } from "react";
import style from "./loading.module.css";
import bridge from "../assets/logo-bridge.png";

const Loading = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 1. Wait for the logo animation to finish (approx 3.5s)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3500);

    // 2. Remove component from DOM after fade out completes (approx 4.5s)
    const removeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`${style.loading} ${isExiting ? style.bgFadeOut : ""}`}>
      <div className={style.brandContainer}>
        <img src={bridge} alt="Bridge Logo" className={style.bridge} />

        <div className={style.lettersWrapper}>
          <div className={`${style.letter} ${style.R}`} />
          <div className={`${style.letter} ${style.C}`} />
          <div className={`${style.letter} ${style.H}`} />
          <div className={`${style.letter} ${style.Y}`} />
        </div>
      </div>
    </div>
  );
};

export default Loading;