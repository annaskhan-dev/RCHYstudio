import React from "react";
import style from "./buildit.module.css";
import bar from "../assets/bar.svg";
import image1 from "../assets/Buildit1.png";
import image2 from "../assets/Buildit2.png";
import image3 from "../assets/Buildit3.png";

const Buildit = () => {
  return (
    <div className={style.maincontainer}>
      <img src={bar} className={style.bar} alt="" />
      <nav className={style.navbar}>
        <p className={style.navtext}>
          BRANDING + <br />
          DIGITAL EXPERIENCE
        </p>
        <p className={style.navtext1}>BUILDIT</p>
      </nav>
      <div className={style.text}>
        <p>
          A Complete Brand Launch For BuildIT, Including logo Design, Visual
          Identity, Social Media Creatives, And A <br />Responsive Website Built to
          Showcase A Workspace Where Businesses Grow.
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

export default Buildit;
