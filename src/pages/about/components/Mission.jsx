import React from "react";
import "../../../styles/about/Mission.css";
import mission from "../../../assets/images/mission.jpg";
import vision from "../../../assets/images/vision.jpg";
import { motion } from "framer-motion";
import vector3 from "../../../assets/images/vector3.png";
import vector1 from "../../../assets/images/vector1.png";
import vector5 from "../../../assets/images/vector5.png";
import vector6 from "../../../assets/images/vector6.png";
import vector8 from "../../../assets/images/vector8.png";

const Mission = () => {
  return (
    <div className="mission__vision__container">
      <div className="mission__container">
        <img src={vector1} alt="" className="mission__vector1" />
        <img src={vector5} alt="" className="mission__vector3" />
        <div className="mission__text__container">
          <img src={vector3} alt="" className="mission__vector2" />
          <h2>Our Mission</h2>
          <p>
            At Decovista, our mission is to transform spaces by offering <br />
            high-quality, stylish, and functional furniture that elevates the{" "}
            <br />
            comfort and aesthetics of every home. We are committed to making{" "}
            <br />
            luxury affordable and accessible to everyone, while fostering a{" "}
            <br />
            seamless shopping experience driven by customer satisfaction. <br />
            Through exceptional craftsmanship, innovative designs, and <br />
            eco-friendly practices, we aim to create products that not only{" "}
            <br />
            inspire but also stand the test of time.
          </p>
        </div>
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          src={mission}
          alt=""
          className="mission__vision__image"
        />
      </div>
      <div className="mission__container">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          src={vision}
          alt=""
          className="mission__vision__image image1"
        />
        <img src={vector5} alt="" className="vision__vector1" />
        <img src={vector6} alt="" className="vision__vector2" />
        <div className="vision__text__container">
        <img src={vector3} alt="" className="vision__vector3" />
          <h2>Our Vision</h2>
          <p>
            Our vision is to become a global leader in home furnishing, known
            for redefining modern living through thoughtfully designed,
            sustainable, and affordable furniture. We aspire to create a brand
            that is synonymous with elegance, innovation, and responsibility,
            continuously evolving to meet the dynamic needs of our customers. By
            blending style, functionality, and sustainability, we envision a
            future where every home is a unique reflection of the people living
            in it, powered by the quality and innovation that Decovista stands
            for.
          </p>
        </div>
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          src={vision}
          alt=""
          className="mission__vision__image2"
        />
      </div>
    </div>
  );
};

export default Mission;
