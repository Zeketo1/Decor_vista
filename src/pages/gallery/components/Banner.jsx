import React from "react";
import "../../../styles/gallery/Banner.css";
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
      <div className="gallery__banner__container">
        <div>
          <motion.h1
            variants={container(-300, 0.8)}
            initial="hidden"
            animate="visible"
            className="gallery__text"
          >
            Gallery
          </motion.h1>
          <motion.p
            variants={container(-300, 1)}
            initial="hidden"
            animate="visible"
            className="gallery__route__text"
          >
            Home / Gallery
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Banner;
