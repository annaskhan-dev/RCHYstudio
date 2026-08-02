import React from "react";
import style from "./herosection.module.css";
import heroimage from "../assets/heroimage.svg";
import star1 from "../assets/Star 1.svg";
import herofooter from "../assets/rbridge.svg";
import bridge from "../assets/logorbridge.svg";
import R from "../assets/BR.png";
import C from "../assets/BC.png";
import H from "../assets/BH.png";
import Y from "../assets/BY.png";

const HeroSection = () => {
  return (
    <section className={style.rchy_hero_section}>
      {/* Wrapper to constrain width on desktop */}
      <div className={style.rchy_main_wrapper}>
        
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

        <div className={style.rchy_hero_content}>
          <img src={heroimage} alt="Hero" className={style.rchy_hero_image} />
          <img src={star1} alt="Star Element" className={style.rchy_star_element} />
        </div>

        <div className={style.rchy_hero_footer}>
          <img src={herofooter} alt="Hero Footer" className={style.rchy_hero_footer_image} />
          <p className={style.rchy_hero_footer_text}>
            We Design Logos. We Build Websites. We Run
            <br /> Campaigns. Everyone Says That. We'd rather
            <br /> Understand What Your Business Needs, Remove
            <br /> what's Getting In The Way, And Create Work That
            <br /> Earns Attention Instead Of Demanding It.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;