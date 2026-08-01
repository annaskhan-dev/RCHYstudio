import React from "react";
import style from "./footer.module.css";
import Footerlogo from "../assets/footerlogo.png";

const footer = () => {
  return (
    <div className={style.footer}>
      <nav>
        <img className={style.footerlogo} src={Footerlogo} alt="" />
        <div className={style.buttondiv}></div>
        <button>START A PROJECT </button>
        <button>SEE THE WORK</button>
      </nav>
      <div className={style.footertext}>
        <p>YOU REACH. <br />
         WE STRETCH.</p>
      </div>
    </div>
  );
};

export default footer;
