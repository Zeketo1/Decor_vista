import React, { useEffect, useState } from "react";
import "../../../styles/about/Intro.css";
import chair from "../../../assets/images/chair.png";
import blackChair from "../../../assets/images/slide1.png";
import vase from "../../../assets/images/vase.png";
import vector3 from "../../../assets/images/vector3.png"
import vector4 from "../../../assets/images/vector4.png"
import vector8 from "../../../assets/images/vector8.png"
import vector6 from "../../../assets/images/vector6.png"
import { motion } from "framer-motion";
import {
  PiCheckCircleThin,
  PiHeadsetThin,
  PiMoneyWavyThin,
  PiPaintBrushThin,
} from "react-icons/pi";

const Intro = () => {
  const whyOptions = [
    { icon: <PiPaintBrushThin className="icon" />, text: "Exclusive Designs" },
    { icon: <PiCheckCircleThin className="icon" />, text: "Quality Products" },
    { icon: <PiMoneyWavyThin className="icon" />, text: "Affordable Luxury" },
    { icon: <PiHeadsetThin className="icon" />, text: "24/7 Support" },
  ];

  // Framer-motion things
  const [banner, setBanner] = useState(0);
  const imageSliders = [
    { image: chair, direction: "y", value: -300 },
    { image: blackChair, direction: "x", value: 300 },
    { image: vase, direction: "y", value: 300 },
  ];

  const nextSlide = () => {
    setInterval(() => {
      setBanner(banner === imageSliders.length - 1 ? 0 : banner + 1);
    }, 3000);
  };

  useEffect(() => {
    setBanner(0);

    clearInterval(nextSlide);
  }, []);

  useEffect(() => {
    nextSlide();
  }, [banner]);

  const container = (axis, value, delay) => ({
    hidden: { [axis]: value, opacity: 0 }, 
    visible: {
      [axis]: 0, 
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="intro__parnter">
      <img src={vector4} alt="" className="intro__vector1" />
      <img src={vector3} alt="" className="intro__vector2" />
      <img src={vector6} alt="" className="intro__vector3" />
      <img src={vector8} alt="" className="intro__vector5" />
      <div className="intro__container">
        <div className="intro__text">
          <p className="welcome__text">Welcome to Decovista</p>
          <p className="success__header">
            Our Success and Company <br /> History.
          </p>
          <p className="success__message">
            At Decovista, we’ve built a legacy of delivering exceptional
            products and outstanding customer service. From our humble
            beginnings to the thriving business we are today, our journey has
            been fueled by a passion for innovation, quality, and customer
            satisfaction.
          </p>
          <div className="qoute__container">
            <div className="qoute__line"></div>
            <p className="qoute">
              "Simplicity is the ultimate sophistication." — Leonardo da Vinci
            </p>
          </div>
          <p className="success__message">
            We believe in creating products that combine style and function,
            making your life easier and more enjoyable. Over the years, we’ve
            continually evolved, adapting to the latest trends and technologies
            to bring you the best shopping experience possible
          </p>
        </div>
        <div className="intro">
          {imageSliders.map(
            ({ image, direction, value }, i) =>
              banner === i && (
                <motion.img
                  variants={container(direction, value, 0.8)}
                  initial="hidden"
                  animate="visible"
                  src={image}
                  key={i}
                  alt=""
                  height={380}
                />
              )
          )}
        </div>{" "}
      </div>
      <div className="intro__services">
        <div className="intro__services__header">
          <p className="why__header">WHY DECOVISTA?</p>
          <p>
            At Decovista, we believe that your home should be a reflection of
            your personal style
          </p>
        </div>
        <div className="why__container">
          {whyOptions.map(({ icon, text }, i) => (
            <div key={i}>
              {icon}
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
