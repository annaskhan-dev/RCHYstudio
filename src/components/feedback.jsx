import React from "react";
import style from "./feedback.module.css";
import Benjfb from "../assets/benjaminfb.png";
import Iqbalfb from "../assets/iqbalahmedfb.png";
import Brandsguardfb from "../assets/brandsgardfb.png";
import Foobzstar from "../assets/fobbztarfb.png";

const feedbackData = [
  {
    id: 1,
    imgSrc: Benjfb,
    alt: "Benjamin Flaherty",
    name: "Benjamin Flaherty",
    role: "Filmmaker & Movie Director",
  },
  {
    id: 2,
    imgSrc: Iqbalfb,
    alt: "Iqbal Ahmed Alvi",
    name: "Iqbal Ahmed Alvi",
    role: "CEO / Co-Founder BuildIT",
  },
  {
    id: 3,
    imgSrc: Brandsguardfb,
    alt: "Benjamin Brandsgard",
    name: "Benjamin Brandsgard",
    role: "Principal Asset Management",
  },
  {
    id: 4,
    imgSrc: Foobzstar,
    alt: "Fobbztar",
    name: "Fobbztar",
    role: "Twitch Streamer / Tennis Coach",
  },
];

const Feedback = () => {
  return (
    <div>
      <div className={style.heading}>
        <p>REAL FEEDBACK. REAL GROWTH.</p>
      </div>
      
      <div className={style.imagecontainer}>
        {feedbackData.map((item) => (
          <div className={style.imageWrapper} key={item.id}>
            <img src={item.imgSrc} alt={item.alt} />
            
            <div className={style.textOverlay}>
              <p className={style.name}>{item.name}</p>
              <p className={style.role}>{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;