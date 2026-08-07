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
    quote: "The Whole Process Felt Effortless. They Really Understood The Kind Of Portfolio I Wanted And Brought It To Life With A Clean, Cinematic Feel. It Finally Feels Like A Website That Represents My Work.",
  },
  {
    id: 2,
    imgSrc: Iqbalfb,
    alt: "Iqbal Ahmed Alvi",
    name: "Iqbal Ahmed Alvi",
    role: "CEO / Co-Founder BuildIT",
    quote: "They Understood The Vision From The Start And Created A Brand Identity That Feels Professional, Memorable, And True To What We Wanted. The Logo, Website, And Overall Branding Came Together Seamlessly, And We've Had Great Feedback Since Launch.",
  },
  {
    id: 3,
    imgSrc: Brandsguardfb,
    alt: "Benjamin Brandsgard",
    name: "Benjamin Brandsgard",
    role: "Principal Asset Management",
    quote: "Working With Onais Was A Great Experience. He Quickly Understood My Vision, Communicated Clearly Throughout The Project, And Delivered High-Quality Work. Professional, Reliable, And Easy To Work With—I'd Happily Work With Him Again.",
  },
  {
    id: 4,
    imgSrc: Foobzstar,
    alt: "Fobbztar",
    name: "Fobbztar",
    role: "Twitch Streamer / Tennis Coach",
    quote: "Working With RCHY Was A Great Experience From Start To Finish. They Understood Exactly What I Was Looking For And Delivered A Clean, Professional Result That Exceeded My Expectations. The Process Was Smooth, And I'd Happily Recommend Them To Anyone Looking For High-Quality Design.",
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
            
            {/* Review Quote Text */}
            <div className={style.quoteOverlay}>
              <p>{item.quote}</p>
            </div>

            {/* Name and Role Overlay */}
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