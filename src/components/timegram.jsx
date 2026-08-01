import React from "react";
import style from "./timegram.module.css";
import bar from "../assets/bar.svg";
import image1 from "../assets/benjimg1.png";
import image2 from "../assets/benjimg2.png";
import image3 from "../assets/benjimg3.png";

const Time = () => {
  return (
    <div className={style.maincontainer}>
      <img src={bar} className={style.bar} alt="" />
      <nav className={style.navbar}>
        <p className={style.navtext}>
          IDENTITY + <br /> WEBSITE
        </p>
        <p className={style.navtext1}>BENJAMIN FLAHERTY</p>
      </nav>
      <div className={style.text}>
        <p>
          We Shaped Benjamin Flaherty's Creative Identity, Established Clear
          Brand Guidelines, And Designed A <br /> Responsive Portfolio That Lets
          The Work Speak First.
        </p>
      </div>
      <div className={style.hero}>
        <img className={style.image1} src={image1} alt="" />
        <img className={style.image2} src={image2} alt="" />
        <img className={style.image3} src={image3} alt="" />
      </div>
    </div>
  );
};

export default Time;
