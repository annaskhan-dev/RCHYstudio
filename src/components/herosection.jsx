import React from "react";
import style from "./herosection.module.css";
import herofooter from "../assets/rbridge.svg"; 
import bridge from "../assets/logorbridge.svg";
import R from "../assets/BR.png";
import C from "../assets/BC.png";
import H from "../assets/BH.png";
import Y from "../assets/BY.png";

const HeroSection = () => {
  return (
    <section className={style.rchy_hero_section}>
      {/* Navigation */}
      <nav className={style.rchy_nav_bar}>
        <p className={style.rchy_title}>Mind The Gap</p>
        <div className={style.rchy_logo_container}>
          <img src={bridge} alt="Bridge Logo" className={style.rchy_bridge} />
          <div className={style.rchy_letters_wrapper}>
            <img src={R} alt="R" className={style.rchy_logo_letter} />
            <img src={C} alt="C" className={style.rchy_logo_letter} />
            <img src={H} alt="H" className={style.rchy_logo_letter} />
            <img src={Y} alt="Y" className={style.rchy_logo_letter} />
          </div>
        </div>
      </nav>

      {/* Main Hero Content (Headline + Footer block) */}
      <div className={style.rchy_main_wrapper}>
        
        <h1 className={style.rchy_headline}>
          We Make Clicks<br />
          Feel Inevitable.
        </h1>

        <div className={style.rchy_footer_wrapper}>
          <img src={herofooter} alt="Hero Footer" className={style.rchy_footer_image} />
          <p className={style.rchy_footer_text}>
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