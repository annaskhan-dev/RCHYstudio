import React from "react";
import style from "./herosection.module.css";
import star1 from "../assets/Star 1.svg";
import herofooter from "../assets/rbridge.svg";
import bridge from "../assets/logorbridge.svg";
import R from "../assets/BR.png";
import C from "../assets/BC.png";
import H from "../assets/BH.png";
import Y from "../assets/BY.png";

const HeroSection = () => {
  return (
    <section className={style.hero}>
      <nav className={style.navbar}>
        <p className={style.title}>Mind The Gap</p>
        <div className={style.logoContainer}>
          <img src={bridge} alt="Bridge Logo" className={style.bridge} />
          <div className={style.lettersWrapper}>
            <img src={R} alt="R" className={style.logoLetter} />
            <img src={C} alt="C" className={style.logoLetter} />
            <img src={H} alt="H" className={style.logoLetter} />
            <img src={Y} alt="Y" className={style.logoLetter} />
          </div>
        </div>
      </nav>

      <div className={style.heroMain}>
        <h1 className={style.headline}>
          We <span className={style.mWrapper}>M<img src={star1} className={style.star} /></span>ke Clicks
          <br />
          Feel Inevitable.
        </h1>

        <div className={style.footerSection}>
          <img src={herofooter} alt="Footer" className={style.footerImg} />
          <p className={style.footerText}>
            We Design Logos. We Build Websites. We Run <br />
            Campaigns. Everyone Says That. We'd rather <br />
            Understand What Your Business Needs, Remove <br />
            what's Getting In The Way, And Create Work That <br />
            Earns Attention Instead Of Demanding It.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;