import React, { useEffect, useRef, useState } from "react";
import style from "./work.module.css";

import pic1 from "../assets/1.png"; import pic2 from "../assets/2.png";
import pic3 from "../assets/3.png"; import pic4 from "../assets/4.png";
import pic5 from "../assets/5.png"; import pic6 from "../assets/6.png";
import pic7 from "../assets/7.png"; import pic8 from "../assets/8.png";
import pic9 from "../assets/9.png"; import pic10 from "../assets/10.png";

const Work = () => {
  const containerRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOpened(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`${style.work} ${isOpened ? style.opened : ""}`}
    >
      <h2 className={style.h2}>
        WE BUILD BRANDS WORTH A FOLLOW <br /> AND PAGES WORTH A SCROLL BACK UP.
      </h2>

      <div className={style.workcontainer}>
        <div className={style.columnTrack}><div className={style.insidecontainer}><img src={pic1} alt="" /><img src={pic2} alt="" /></div></div>
        <div className={style.columnTrack}><div className={style.insidecontainer}><img src={pic3} alt="" /><img src={pic4} alt="" /></div></div>
        <div className={style.columnTrack}><div className={style.insidecontainer}><img src={pic5} alt="" /><img src={pic6} alt="" /></div></div>
        <div className={style.columnTrack}><div className={style.insidecontainer}><img src={pic7} alt="" /><img src={pic8} alt="" /></div></div>
        <div className={style.columnTrack}><div className={style.insidecontainer}><img src={pic9} alt="" /><img src={pic10} alt="" /></div></div>
      </div>
    </div>
  );
};

export default Work;