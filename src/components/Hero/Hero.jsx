"use client";
import React from "react";
import "./Hero.css";
import EmailBox from "../EmailBox/EmailBox";
import { HeroData } from "@/src/utils/data";
import { motion } from "framer-motion";
const Hero = () => {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });

  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });
  return (
    <div class="h-wrapper">
      <div class="container">
        <img class="h-arrow" src="hero/hero-arrow.png" alt="arrow" />

        <div class="h-container">
          {/* left side */}
          <div class="h-left">
            <div class="image-row">
              {HeroData.slice(0, 3).map((person, i) => (
                <div key={i} className="person-pill">
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
            <div class="image-row">
              {HeroData.slice(3, 6).map((person, i) => (
                <div key={i} className="person-pill">
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          {/* right side */}
          <div class="h-right">
            <div class="h-title">
              <span>Build Software</span>
              <span>Boost Business</span>
              <span>Digital Partner</span>
            </div>
            <div class="h-des">
                Let's transform your business into digital world through our top-notch IT services.
            </div>
            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
