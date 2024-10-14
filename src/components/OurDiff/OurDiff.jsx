import React from "react";
import "./OurDiff.css";
import { ourDiffFeatures } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";
const OurDiff = () => {
  return (
    <div class="od-wrapper">
      <div class="container">
        <div class="od-container">
          {/* head */}
          <div class="od-head">
            <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              class="tag"
            >
              Our difference
            </motion.span>
            <motion.span
              variants={titleVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              class="title"
            >
              Budget Friendly, Quality Assured
            </motion.span>
            <motion.span
              variants={desVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              class="text"
            >
             Get affordable, high-quality solutions designed to meet your specific needs and boost success.
              <br />
              We provide budget-friendly custom software solutions and quality-assured digital marketing services that deliver tailored results, ensuring high performance and business growth.
            </motion.span>
          </div>
          {/* Features */}
          <div class="od-features">
            {ourDiffFeatures.map((feature, i) => (
              <motion.div
                variants={containerVariants((i + 1) * 0.1)}
                initial="offscreen"
                whileInView={"onscreen"}
                key={i}
                className="od-feature"
              >
                <Image
                  src={feature.icon}
                  alt="feature"
                  height={128}
                  width={128}
                />
                <span className="sec-title">{feature.title}</span>
                <span className="text">{feature.des}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
