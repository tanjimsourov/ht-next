import React from "react";
import "./HowItWorks.css";
import { features, hitFeatures } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { tagVariants, titleVariants } from "@/src/utils/animation";
const HowItWorks = () => {
  const featureVariants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };
  return (
    <div class="hiw-wrapper">
      <div class="container">
        <div class="hiw-container">
          {/* head */}
          <div class="hiw-head">
            <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              class="tag"
            >
              How it works
            </motion.span>
            <motion.span
              variants={titleVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              class="title"
            >
              Unlocking potential along the growth journey
            </motion.span>
          </div>
          <div class="hiw-features">
            {hitFeatures.map((feature, i) => (
              <motion.div
                variants={featureVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="hiw-feature"
                key={i}
              >
                {/* left side */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: 0.7,
                    },
                  }}
                  className="detail"
                >
                  <span className="des">0{i + 1}</span>
                  <span className="sec-title">{feature.title}</span>{" "}
                  <span className="text">{feature.des}</span>
                </motion.div>

                {/* right side */}
                <div className="icon">
                  <Image
                    src={feature.icon}
                    alt="feature"
                    height={128}
                    width={128}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
