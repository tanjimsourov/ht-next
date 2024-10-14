"use client";
import React from "react";
import "./WhatWeDo.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";
const WhatWeDo = () => {
  return (
    <div class="wwd-wrapper">
      <div class="container">
        <div class="wwd-container">
          {/* head of section */}
          <div class="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              class="tag"
            >
              What we do
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              class="title"
            >
              Building Software for your unique business idea or promote your business using trending technologies & technique.
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              class="des"
            >
              Here is how we can evaluate
            </motion.span>
          </div>
          {/* two blocks */}
          <div class="wwd-blocks">
            {/* first block */}
            <div class="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                class="sec-title"
              >
                Software Solutions
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                class="text"
              >
                We will build software regarding your needs, following web2 & web3 technologies covering all platforms : Mobile, Web.
              </motion.span>
              <div class="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants((i + 1) * 0.1)}
                    key={i}
                    className="block-feature"
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      height={60}
                      width={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* second block */}
            <div class="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                class="sec-title"
              >
                Blue Seed
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                class="text"
              >
                We provide data-driven marketing services like programmatic ads, marketing automation, and predictive analytics to optimize campaigns and boost growth.
              </motion.span>
              <div class="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants((i + 1) * 0.1)}
                    key={i}
                    className="block-feature"
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      height={60}
                      width={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* support block */}
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={containerVariants(0.3)}
          class="wwd-support"
        >
          {/* left side */}
          <div>
            <span class="sec-title">Our Support</span>
            <span class="des">
              We would be available for 24*7  
            </span>
          </div>
          {/* right side */}
          <div>
            <span class="text">
              Actionable data insights by connecting revenue, marketing and
              social media platforms
            </span>
            <span class="text">
              On demand execution expertise at cost or revenue share across
              proposition design, engineering, marketing analytics,
              partnerships, brand, intellectual property, market expansion,
              talent management
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
