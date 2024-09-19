import React from "react";
import "../../../styles/about/Intro.css";
import chair from "../../../assets/images/chair.png";
import { GiRecycle } from "react-icons/gi";
import { PiCheckCircleThin, PiHeadsetThin, PiMoneyWavyThin, PiPaintBrushThin } from "react-icons/pi";

const Intro = () => {
  const whyOptions = [
    { icon: <PiPaintBrushThin className="icon"/>, text: "Exclusive Designs" },
    { icon: <PiCheckCircleThin className="icon"/>, text: "Quality Products" },
    { icon: <PiMoneyWavyThin className="icon"/>, text: "Affordable Luxury" },
    { icon: <PiHeadsetThin className="icon"/>, text: "24/7 Support" },
    // { icon: <GiRecycle className="icon"/>, text: "Sustainable Choices" },
  ];

  return (
    <div className="intro__parnter">
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
          <img src={chair} alt="" height={380} />
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
