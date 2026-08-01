import React, { useState, useEffect } from "react";
import Cards from "./components/cards";
import HeroSection from "./components/herosection";
import Loading from "./components/loading";
import Work from "./components/work";
import Benj from "./components/benjamin";
import Buildit from "./components/buildit";
import Footer from "./components/footer";
import Math from "./components/mathlogic";
import Time from "./components/timegram";
import Fobb from "./components/fobbztar";
import Feedback from "./components/feedback";

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  // Body scroll lock during loading state
  useEffect(() => {
    if (showLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLoading]);

  // Smooth entry on scroll down, smooth reverse exit on scroll up
  useEffect(() => {
    if (showLoading) return;

    const animationFrame = requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Check if the element is entering from the bottom or leaving toward the bottom
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            } else {
              // Only remove active if the element has scrolled back down past the bottom viewport threshold
              if (entry.boundingClientRect.top > 0) {
                entry.target.classList.remove("active");
              }
            }
          });
        },
        {
          // Root margin ensures elements stay active while reading, 
          // and only reverse when scrolling back up past them
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.1,
        }
      );

      const elements = document.querySelectorAll('[class*="scroll-3d-"]');
      elements.forEach((el) => observer.observe(el));
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [showLoading]);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Loading Overlay */}
      {showLoading && <Loading onComplete={() => setShowLoading(false)} />}

      {/* 1. Hero: Smooth Depth Zoom */}
      <div className="scroll-3d-zoom">
        <HeroSection />
      </div>

      {/* 2. Cards: Upward 3D Perspective Tilt */}
      <div className="scroll-3d-tilt" style={{ position: "relative", zIndex: 10 }}>
        <Cards />
      </div>

      {/* 3. Work Section: Pure Vertical Centered Float */}
      <div className="scroll-3d-slide-left" style={{ position: "relative", zIndex: 1 }}>
        <Work />
      </div>

      {/* 4. Project Showcase Entries */}
      <div className="scroll-3d-slide-right">
        <Benj />
      </div>

      <div className="scroll-3d-slide-left">
        <Buildit />
      </div>

      {/* <div className="scroll-3d-flip">
        <Math />
      </div>
 */}
      {/* <div className="scroll-3d-slide-right">
        <Time />
      </div>

      <div className="scroll-3d-slide-left">
        <Fobb />
      </div> */}

      {/* 5. Feedback: Clean Depth Rise */}
      <div className="scroll-3d-pop">
        <Feedback />
      </div>

      {/* 6. Footer: Upward 3D Perspective Tilt */}
      <div className="scroll-3d-tilt">
        <Footer />
      </div>
    </div>
  );
};

export default App;