import React from "react";
import style from "./feedback.module.css";
import Benjfb from "../assets/benjaminfb.png";
import Iqbalfb from "../assets/iqbalahmedfb.png";
import Brandsguardfb from "../assets/brandsgardfb.png";
import Foobzstar from "../assets/fobbztarfb.png";

const Feedback = () => {
  return (
    <div>
      <div className={style.heading}>
        <p>REAL FEEDBACK. REAL GROWTH.</p>
      </div>
      <div className={style.imagecontainer}>
        
        {/* Benjamin */}
        <div className={style.imageWrapper}>
          <img src={Benjfb} alt="Benjamin Flaherty" />
          <div className={style.textOverlay}>
            <p className={style.name}>Benjamin Flaherty</p>
            <p className={style.role}>Filmmaker & Movie Director</p>
          </div>
        </div>

        {/* Iqbal */}
        <div className={style.imageWrapper}>
          <img src={Iqbalfb} alt="Iqbal Ahmed Alvi" />
          <div className={style.textOverlay}>
            <p className={style.name}>Iqbal Ahmed Alvi</p>
            <p className={style.role}>CEO / Co-Founder BuildIT</p>
          </div>
        </div>

        {/* Brandsguard */}
        <div className={style.imageWrapper}>
          <img src={Brandsguardfb} alt="Benjamin Brandsgard" />
          <div className={style.textOverlay}>
            <p className={style.name}>Benjamin Brandsgard</p>
            <p className={style.role}>Principal Asset Management</p>
          </div>
        </div>

        {/* Foobzstar */}
        <div className={style.imageWrapper}>
          <img src={Foobzstar} alt="Fobbztar" />
          <div className={style.textOverlay}>
            <p className={style.name}>Fobbztar</p>
            <p className={style.role}>Twitch Streamer / Tennis Coach</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Feedback;