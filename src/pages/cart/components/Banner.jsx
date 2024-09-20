import React from "react";
import '../../../styles/cart/Banner.css';
import { motion } from "framer-motion";

const Banner = () => {
  const container = (x, delay) => ({
    hidden: { x: x, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <>
      <div className="banner__container">
        <div>
          <motion.h1
            variants={container(-300, 0.8)}
            initial="hidden"
            animate="visible"
            className="about__us__text"
          >
            Cart
          </motion.h1>
          <motion.p
            variants={container(-300, 1)}
            initial="hidden"
            animate="visible"
            className="about__us__route__text"
          >
            Home / Cart
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Banner;
