import React from "react";
import "./WhoWeInvest.css";
import { whoWeInvest } from "@/src/utils/data";
import { motion } from "framer-motion";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";
const WhoWeInvest = () => {
  return (
    <div class="wwi-wrapper">
      <div class="container">
        <div class="wwi-container">
          {/* left side */}
          <div class="wwi-left">
            <div class="head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                class="tag"
              >
                Who we are
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                class="title"
              >
                We are a team of software engineers and business analysts,
                <br />
                committed to delivering innovative solutions tailored to your business needs.
              </motion.span>
            </div>

            {/* features */}
            <div class="wwi-features">
              {whoWeInvest.map((feature, i) => (
                <motion.div
                  variants={containerVariants(i * 0.5 + 1)}
                  initial="offscreen"
                  whileInView={"onscreen"}
                  className="wwi-feature"
                  key={i}
                >
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* right side */}
          <div class="wwi-right">
            <div class="wwi-triangle">
              <motion.img
                variants={containerVariants(0.5)}
                initial="offscreen"
                whileInView={"onscreen"}
                src="persons.png"
                alt="persons"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
