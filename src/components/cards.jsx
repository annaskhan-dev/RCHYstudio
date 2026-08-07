import React, { useState, useRef } from "react";

import style from "./cards.module.css";

import orange from "../assets/orange-card.svg";
import beige from "../assets/beige-card.svg";
import blue from "../assets/blue-card.svg";
import green from "../assets/green-card.svg";
import brown from "../assets/brown-card.svg";

import orangeflip from "../assets/orange-flip.svg";
import beigeflip from "../assets/beigeflip.svg";
import blueflip from "../assets/blueflip.svg";
import greenflip from "../assets/greenflip.svg";
import brownflip from "../assets/brownflip.svg";

const cardData = [
  { id: 0, title: "BRANDING & ADVERTISING", img: orange, imgFlip: orangeflip },
  { id: 1, title: "WEBSITES & PLATFORMS", img: beige, imgFlip: beigeflip },
  { id: 2, title: "DIGITAL PRODUCTS", img: blue, imgFlip: blueflip },
  { id: 3, title: "COMPETITIVE ANALYSIS", img: green, imgFlip: greenflip },
  { id: 4, title: "LOGO DESIGN", img: brown, imgFlip: brownflip },
];

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isCenterHovered, setIsCenterHovered] = useState(false);

  // Drag State Tracking
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const hasDraggedRef = useRef(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
    setIsCenterHovered(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
    setIsCenterHovered(false);
  };

  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setIsTransitioning(false);
    setStartX(clientX);
    setDragOffset(0);
    hasDraggedRef.current = false;
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setDragOffset(diff * 0.75);
    if (Math.abs(diff) > 8) {
      hasDraggedRef.current = true;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsTransitioning(true);

    const SWIPE_THRESHOLD = 40;
    if (dragOffset < -SWIPE_THRESHOLD) {
      handleNext();
    } else if (dragOffset > SWIPE_THRESHOLD) {
      handlePrev();
    }

    setDragOffset(0);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const handleHitZoneClick = (offset, index) => {
    if (hasDraggedRef.current) return;

    if (offset === 0) {
      setIsCenterHovered((prev) => !prev);
    } else {
      setIsTransitioning(true);
      setActiveIndex(index);
      setIsCenterHovered(false);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }
  };

  return (
    <div className={style.cardsSection}>
      <h2 className={style.h2}>
        WE DO EVERYTHING YOU NEED <br /> TO MAKE YOUR BRAND BLOOM
      </h2>

      <div className={style.carouselWrapper}>
        {/* Mobile Navigation Arrows */}
        <button className={`${style.mobileArrow} ${style.prevArrow}`} onClick={handlePrev} aria-label="Previous Card">
          &#10094;
        </button>
        <button className={`${style.mobileArrow} ${style.nextArrow}`} onClick={handleNext} aria-label="Next Card">
          &#10095;
        </button>

        <div
          className={`${style.cardContainer} ${isDragging ? style.dragging : ""}`}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {/* 3D Visual Cards */}
          <div className={style.visualTrack}>
            {cardData.map((card, index) => {
              const total = cardData.length;
              let offset = index - activeIndex;

              if (offset > Math.floor(total / 2)) offset -= total;
              else if (offset < -Math.floor(total / 2)) offset += total;

              const absOffset = Math.abs(offset);
              const isActive = offset === 0;

              if (absOffset > 2) return null;

              return (
                <div
                  key={card.id}
                  className={`${style.cardWrapper} ${
                    isActive ? style.centerCard : ""
                  } ${isActive && isCenterHovered ? style.hovered : ""} ${
                    isTransitioning ? style.transitioning : ""
                  }`}
                  style={{
                    "--offset": offset,
                    "--abs-offset": absOffset,
                    "--drag-offset": `${dragOffset}px`,
                    zIndex: 10 - absOffset,
                  }}
                >
                  <div className={style.cardInner}>
                    {/* Front Face */}
                    <div className={`${style.cardFace} ${style.cardFront}`}>
                      <div className={style.imageContainer}>
                        <img
                          src={card.img}
                          alt={card.title}
                          className={style.cardImg}
                          draggable="false"
                        />
                      </div>
                    </div>

                    {/* Back Face (Flip Side) */}
                    <div className={`${style.cardFace} ${style.cardBack}`}>
                      <div className={style.imageContainer}>
                        <img
                          src={card.imgFlip}
                          alt={`${card.title} flipped`}
                          className={style.cardImg}
                          draggable="false"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 2D Flat Interaction Layer */}
          <div className={style.interactionOverlay}>
            {cardData.map((card, index) => {
              const total = cardData.length;
              let offset = index - activeIndex;

              if (offset > Math.floor(total / 2)) offset -= total;
              else if (offset < -Math.floor(total / 2)) offset += total;

              if (Math.abs(offset) > 2) return null;

              const isActiveZone = offset === 0;

              return (
                <div
                  key={`hit-${card.id}`}
                  className={`${style.hitZone} ${isActiveZone ? style.activeHitZone : ""}`}
                  style={{ "--offset": offset }}
                  onClick={() => handleHitZoneClick(offset, index)}
                  onMouseEnter={() => isActiveZone && setIsCenterHovered(true)}
                  onMouseLeave={() => isActiveZone && setIsCenterHovered(false)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;