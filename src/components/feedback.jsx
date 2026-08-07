import React from "react";
import style from "./footer.module.css";
import Footerlogo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <nav className={style.nav}>
        <img className={style.footerlogo} src={Footerlogo} alt="Logo" />
        <div className={style.buttonGroup}>
          <button className={style.footerBtn}>START A PROJECT</button>
          <button className={style.footerBtn}>SEE THE WORK</button>
        </div>
      </nav>
      <div className={style.footertext}>
        <p>
          YOU REACH. <br />
          WE STRETCH.
        </p>
      </div>
    </div>
  );
};

export default Footer;